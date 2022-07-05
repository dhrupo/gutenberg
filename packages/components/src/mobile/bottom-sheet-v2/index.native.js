/**
 * External dependencies
 */
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetView,
	BottomSheetScrollView,
	useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { Modal } from 'react-native';

/**
 * WordPress dependencies
 */
import {
	forwardRef,
	useCallback,
	useState,
	useImperativeHandle,
	useRef,
} from '@wordpress/element';

function BottomSheetV2(
	{ onClose, children, index = 0, snapPoints = [ '50%' ], style } = {},
	ref
) {
	const bottomSheetRef = useRef( null );
	const [ visible, setVisible ] = useState( index >= 0 );
	/**
	 * `internalIndex` is used to allow displaying the modal on initial render,
	 * which is required in some areas of the code base that do not easily support
	 * an call to an imperative `present` method.
	 */
	const [ internalIndex, setInternalIndex ] = useState( index );

	const handlePresent = useCallback( () => {
		setVisible( true );
		setInternalIndex( index >= 0 ? index : 0 );
	}, [] );

	const handleDismiss = useCallback( () => {
		bottomSheetRef.current?.close();
	}, [] );

	/**
	 * Utilize imperative handle to mimic the `@gorhom/bottom-sheet` API, which
	 * would simplify migrating to `BottomSheetModal` in the future once the
	 * editor header navigation is rendered by React Native, not the native host
	 * app.
	 */
	useImperativeHandle( ref, () => ( {
		present: handlePresent,
		dismiss: handleDismiss,
	} ) );

	const renderBackdrop = useCallback(
		( props ) => (
			<BottomSheetBackdrop
				{ ...props }
				disappearsOnIndex={ -1 }
				appearsOnIndex={ 0 }
			/>
		),
		[]
	);

	const {
		animatedHandleHeight,
		animatedSnapPoints,
		animatedContentHeight,
		handleContentLayout,
	} = useBottomSheetDynamicSnapPoints( snapPoints );

	return (
		<Modal transparent={ true } visible={ visible }>
			<BottomSheet
				backdropComponent={ renderBackdrop }
				enablePanDownToClose={ true }
				contentHeight={ animatedContentHeight }
				handleHeight={ animatedHandleHeight }
				index={ internalIndex }
				onClose={ () => {
					setVisible( false );
					if ( onClose ) {
						onClose();
					}
				} }
				ref={ bottomSheetRef }
				snapPoints={ animatedSnapPoints }
				style={ style }
			>
				<BottomSheetScrollView onLayout={ handleContentLayout }>
					{ children }
				</BottomSheetScrollView>
			</BottomSheet>
		</Modal>
	);
}

const BottomSheetV2ForwardRef = forwardRef( BottomSheetV2 );

BottomSheetV2ForwardRef.ScrollView = BottomSheetScrollView;
BottomSheetV2ForwardRef.View = BottomSheetView;

export default BottomSheetV2ForwardRef;
