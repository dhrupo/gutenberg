"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1721],{"./packages/components/src/navigable-container/container.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/dom/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},MENU_ITEM_ROLES=["menuitem","menuitemradio","menuitemcheckbox"];class NavigableContainer extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(){super(...arguments),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container.addEventListener("keydown",this.onKeyDown),this.container.addEventListener("focus",this.onFocus)}componentWillUnmount(){this.container.removeEventListener("keydown",this.onKeyDown),this.container.removeEventListener("focus",this.onFocus)}bindContainer(ref){const{forwardedRef:forwardedRef}=this.props;this.container=ref,"function"==typeof forwardedRef?forwardedRef(ref):forwardedRef&&"current"in forwardedRef&&(forwardedRef.current=ref)}getFocusableContext(target){const{onlyBrowserTabstops:onlyBrowserTabstops}=this.props,focusables=(onlyBrowserTabstops?_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__.T_.tabbable:_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__.T_.focusable).find(this.container),index=this.getFocusableIndex(focusables,target);return index>-1&&target?{index:index,target:target,focusables:focusables}:null}getFocusableIndex(focusables,target){const directIndex=focusables.indexOf(target);if(-1!==directIndex)return directIndex}onKeyDown(event){this.props.onKeyDown&&this.props.onKeyDown(event);const{getFocusableContext:getFocusableContext}=this,{cycle:cycle=!0,eventToOffset:eventToOffset,onNavigate:onNavigate=noop,stopNavigationEvents:stopNavigationEvents}=this.props,offset=eventToOffset(event);if(void 0!==offset&&stopNavigationEvents){event.stopImmediatePropagation();const targetRole=event.target.getAttribute("role"),targetHasMenuItemRole=MENU_ITEM_ROLES.includes(targetRole),isTab="Tab"===event.code;(targetHasMenuItemRole||isTab)&&event.preventDefault()}if(!offset)return;const context=getFocusableContext(event.target.ownerDocument.activeElement);if(!context)return;const{index:index,focusables:focusables}=context,nextIndex=cycle?function cycleValue(value,total,offset){const nextValue=value+offset;return nextValue<0?total+nextValue:nextValue>=total?nextValue-total:nextValue}(index,focusables.length,offset):index+offset;nextIndex>=0&&nextIndex<focusables.length&&(focusables[nextIndex].focus(),onNavigate(nextIndex,focusables[nextIndex]))}render(){const{children:children,stopNavigationEvents:stopNavigationEvents,eventToOffset:eventToOffset,onNavigate:onNavigate,onKeyDown:onKeyDown,cycle:cycle,onlyBrowserTabstops:onlyBrowserTabstops,forwardedRef:forwardedRef,...restProps}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:this.bindContainer,...restProps,children:children})}}NavigableContainer.displayName="NavigableContainer";const forwardedNavigableContainer=(props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigableContainer,{...props,forwardedRef:ref});forwardedNavigableContainer.displayName="forwardedNavigableContainer",forwardedNavigableContainer.displayName="NavigableContainer",forwardedNavigableContainer.__docgenInfo={description:"",methods:[],displayName:"NavigableContainer"},__webpack_exports__.Z=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(forwardedNavigableContainer),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/navigable-container/container.js"]={name:"forwardedNavigableContainer",docgenInfo:forwardedNavigableContainer.__docgenInfo,path:"packages/components/src/navigable-container/container.js"})},"./packages/components/src/navigable-container/menu.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_container__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/navigable-container/container.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavigableMenu(_ref,ref){let{role:role="menu",orientation:orientation="vertical",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.Z,{ref:ref,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:role,"aria-orientation":"presentation"===role?null:orientation,eventToOffset:evt=>{const{code:code}=evt;let next=["ArrowDown"],previous=["ArrowUp"];return"horizontal"===orientation&&(next=["ArrowRight"],previous=["ArrowLeft"]),"both"===orientation&&(next=["ArrowRight","ArrowDown"],previous=["ArrowLeft","ArrowUp"]),next.includes(code)?1:previous.includes(code)?-1:["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(code)?0:void 0},...rest})}NavigableMenu.displayName="NavigableMenu",NavigableMenu.__docgenInfo={description:"",methods:[],displayName:"NavigableMenu",props:{role:{defaultValue:{value:"'menu'",computed:!1},required:!1},orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}},__webpack_exports__.Z=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(NavigableMenu),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/navigable-container/menu.js"]={name:"NavigableMenu",docgenInfo:NavigableMenu.__docgenInfo,path:"packages/components/src/navigable-container/menu.js"})},"./packages/components/src/ui/context/constants.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{cT:function(){return COMPONENT_NAMESPACE},_3:function(){return CONNECTED_NAMESPACE},rE:function(){return CONNECT_STATIC_NAMESPACE}});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Iq:function(){return contextConnect},H:function(){return hasConnectNamespace}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function _contextConnect(Component,namespace,options){const WrappedComponent=null!=options&&options.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{eb:function(){return useComponentsContext},G8:function(){return ContextSystemProvider}});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=_ref2=>{let{children:children,value:value}=_ref2;const contextValue=function useContextSystemBridge(_ref){let{value:value}=_ref;const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_5__.P})),[parentContext,value])}({value:value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children:children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/context/context-system-provider.js"]={name:"BaseContextSystemProvider",docgenInfo:BaseContextSystemProvider.__docgenInfo,path:"packages/components/src/ui/context/context-system-provider.js"})},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return getStyledClassNameFromKey}});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),memize__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/memize/index.js");const getStyledClassNameFromKey=__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_1__)()((function getStyledClassName(namespace){return`components-${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return useContextSystem}});var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=(null==contextSystemProps?void 0:contextSystemProps[namespace])||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View",__webpack_exports__.Z=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/tab-panel/stories/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},DisabledTab:function(){return DisabledTab},default:function(){return stories}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),menu=__webpack_require__("./packages/components/src/navigable-container/menu.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TabButton=_ref=>{let{tabId:tabId,children:children,selected:selected,...rest}=_ref;return(0,jsx_runtime.jsx)(src_button.ZP,{role:"tab",tabIndex:selected?void 0:-1,"aria-selected":selected,id:tabId,__experimentalIsFocusable:!0,...rest,children:children})};function TabPanel(_ref2){var _selectedTab$name;let{className:className,children:children,tabs:tabs,selectOnMove:selectOnMove=!0,initialTabName:initialTabName,orientation:orientation="horizontal",activeClass:activeClass="is-active",onSelect:onSelect}=_ref2;const instanceId=(0,use_instance_id.Z)(TabPanel,"tab-panel"),[selected,setSelected]=(0,react.useState)(),handleTabSelection=(0,react.useCallback)((tabKey=>{setSelected(tabKey),null==onSelect||onSelect(tabKey)}),[onSelect]),selectedTab=tabs.find((_ref3=>{let{name:name}=_ref3;return name===selected})),selectedId=`${instanceId}-${null!==(_selectedTab$name=null==selectedTab?void 0:selectedTab.name)&&void 0!==_selectedTab$name?_selectedTab$name:"none"}`;return(0,react.useEffect)((()=>{if(selectedTab)return;const initialTab=tabs.find((tab=>tab.name===initialTabName));if(!initialTabName||initialTab)if(initialTab&&!initialTab.disabled)handleTabSelection(initialTab.name);else{const firstEnabledTab=tabs.find((tab=>!tab.disabled));firstEnabledTab&&handleTabSelection(firstEnabledTab.name)}}),[tabs,selectedTab,initialTabName,handleTabSelection]),(0,react.useEffect)((()=>{if(null==selectedTab||!selectedTab.disabled)return;const firstEnabledTab=tabs.find((tab=>!tab.disabled));firstEnabledTab&&handleTabSelection(firstEnabledTab.name)}),[tabs,null==selectedTab?void 0:selectedTab.disabled,handleTabSelection]),(0,jsx_runtime.jsxs)("div",{className:className,children:[(0,jsx_runtime.jsx)(menu.Z,{role:"tablist",orientation:orientation,onNavigate:selectOnMove?(_childIndex,child)=>{child.click()}:void 0,className:"components-tab-panel__tabs",children:tabs.map((tab=>(0,jsx_runtime.jsx)(TabButton,{className:classnames_default()("components-tab-panel__tabs-item",tab.className,{[activeClass]:tab.name===selected}),tabId:`${instanceId}-${tab.name}`,"aria-controls":`${instanceId}-${tab.name}-view`,selected:tab.name===selected,onClick:()=>handleTabSelection(tab.name),disabled:tab.disabled,label:tab.icon&&tab.title,icon:tab.icon,showTooltip:!!tab.icon,children:!tab.icon&&tab.title},tab.name)))}),selectedTab&&(0,jsx_runtime.jsx)("div",{"aria-labelledby":selectedId,role:"tabpanel",id:`${selectedId}-view`,className:"components-tab-panel__tab-content",children:children(selectedTab)},selectedId)]})}TabButton.displayName="TabButton",TabPanel.displayName="TabPanel";var tab_panel=TabPanel;try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"TabPanel is an ARIA-compliant tabpanel.\n\nTabPanels organize content across different screens, data sets, and interactions.\nIt has two sections: a list of tabs, and the view to show when tabs are chosen.\n\n```jsx\nimport { TabPanel } from '@wordpress/components';\n\nconst onSelect = ( tabName ) => {\n  console.log( 'Selecting tab', tabName );\n};\n\nconst MyTabPanel = () => (\n  <TabPanel\n    className=\"my-tab-panel\"\n    activeClass=\"active-tab\"\n    onSelect={ onSelect }\n    tabs={ [\n      {\n        name: 'tab1',\n        title: 'Tab 1',\n        className: 'tab-one',\n      },\n      {\n        name: 'tab2',\n        title: 'Tab 2',\n        className: 'tab-two',\n      },\n    ] }\n  >\n    { ( tab ) => <p>{ tab.title }</p> }\n  </TabPanel>\n);\n```",displayName:"TabPanel",props:{activeClass:{defaultValue:{value:"is-active"},description:"The class name to add to the active tab.",name:"activeClass",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"A function which renders the tabviews given the selected tab.\nThe function is passed the active tab object as an argument as defined by the tabs prop.",name:"children",required:!0,type:{name:"(tab: Tab<unknown>) => ReactNode"}},className:{defaultValue:null,description:"The class name to give to the outer container for the TabPanel.",name:"className",required:!1,type:{name:"string"}},initialTabName:{defaultValue:null,description:"The name of the tab to be selected upon mounting of component.\nIf this prop is not set, the first tab will be selected by default.",name:"initialTabName",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"The function called when a tab has been selected.\nIt is passed the `tabName` as an argument.",name:"onSelect",required:!1,type:{name:"(tabName: string) => void"}},orientation:{defaultValue:{value:"horizontal"},description:"The orientation of the tablist.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},tabs:{defaultValue:null,description:"Array of tab objects. Each tab object should contain at least a `name` and a `title`.",name:"tabs",required:!0,type:{name:"Tab<unknown>[]"}},selectOnMove:{defaultValue:{value:"true"},description:"When `true`, the tab will be selected when receiving focus (automatic tab\nactivation). When `false`, the tab will be selected only when clicked\n(manual tab activation). See the official W3C docs for more info.\n.\n@see https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/",name:"selectOnMove",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/tab-panel/index.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"packages/components/src/tab-panel/index.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}var stories={title:"Components/TabPanel",component:tab_panel,parameters:{sourceLink:"packages/components/src/tab-panel",controls:{expanded:!0}}};const Template=props=>(0,jsx_runtime.jsx)(tab_panel,{...props});Template.displayName="Template";const Default=Template.bind({});Default.args={children:tab=>(0,jsx_runtime.jsxs)("p",{children:["Selected tab: ",tab.title]}),tabs:[{name:"tab1",title:"Tab 1"},{name:"tab2",title:"Tab 2"}]};const DisabledTab=Template.bind({});DisabledTab.args={children:tab=>(0,jsx_runtime.jsxs)("p",{children:["Selected tab: ",tab.title]}),tabs:[{name:"tab1",title:"Tab 1",disabled:!0},{name:"tab2",title:"Tab 2"},{name:"tab3",title:"Tab 3"}]};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/tab-panel/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/tab-panel/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);