;/*FB_PKG_DELIM*/

__d("PolarisFXPreTransitionBannerQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5693473647397958"}),null);
__d("PolarisFXPreTransitionBannerQuery.graphql",["PolarisFXPreTransitionBannerQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"content",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"primary_action_title",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"primary_action_uri",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisFXPreTransitionBannerQuery",selections:[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[{alias:null,args:null,concreteType:"XFBFXSettingsACTransitionBanner",kind:"LinkedField",name:"ac_transition_pre_transition_banner",plural:!1,selections:[a,c,d,{kind:"RequiredField",field:e,action:"NONE",path:"fxcal_settings.ac_transition_pre_transition_banner.primary_action_uri"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"PolarisFXPreTransitionBannerQuery",selections:[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[{alias:null,args:null,concreteType:"XFBFXSettingsACTransitionBanner",kind:"LinkedField",name:"ac_transition_pre_transition_banner",plural:!1,selections:[a,c,d,e],storageKey:null}],storageKey:null}]},params:{id:b("PolarisFXPreTransitionBannerQuery_instagramRelayOperation"),metadata:{},name:"PolarisFXPreTransitionBannerQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("PolarisSettingsShellQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6466320586723752"}),null);
__d("PolarisSettingsShellQuery.graphql",["PolarisSettingsShellQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"ac_phase",storageKey:null},c={kind:"Literal",name:"interface",value:"IG_WEB"};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisSettingsShellQuery",selections:[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[a],storageKey:null},{args:null,kind:"FragmentSpread",name:"usePolarisFXCalSettings"},{args:null,kind:"FragmentSpread",name:"usePolarisSettingsItems_fxcalSettings"},{args:null,kind:"FragmentSpread",name:"PolarisSettingsV2_sideMenu"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"PolarisSettingsShellQuery",selections:[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"should_user_see_centralized_settings_new_app_entrypoint",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_user_see_centralized_settings_new_app_ia",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_user_see_pre_transition_banner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_user_see_old_sensitive_settings",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_user_see_payments_row_ac",storageKey:null},{alias:"shouldShowAdsPreferences",args:[c,{kind:"Literal",name:"selected_node_id",value:"AD_PREFERENCES"}],kind:"ScalarField",name:"should_show_node_in_accounts_center",storageKey:'should_show_node_in_accounts_center(interface:"IG_WEB",selected_node_id:"AD_PREFERENCES")'},{alias:"shouldShowAdTopics",args:[c,{kind:"Literal",name:"selected_node_id",value:"AD_TOPICS"}],kind:"ScalarField",name:"should_show_node_in_accounts_center",storageKey:'should_show_node_in_accounts_center(interface:"IG_WEB",selected_node_id:"AD_TOPICS")'},{alias:null,args:null,kind:"ScalarField",name:"ig_project_elevation_one_point_five_enabled",storageKey:null},{alias:null,args:[{kind:"Literal",name:"nodes",value:["APPS_WEBSITES_SETTINGS"]}],kind:"ScalarField",name:"should_show_nodes_in_accounts_center",storageKey:'should_show_nodes_in_accounts_center(nodes:["APPS_WEBSITES_SETTINGS"])'},{alias:null,args:null,concreteType:"XFBFXSettingsACTransitionBanner",kind:"LinkedField",name:"ac_transition_pre_transition_banner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"content",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"primary_action_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"primary_action_uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FXAccountsCenterRouteRequirement",kind:"LinkedField",name:"fx_accounts_center_route_requirement",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_user_see_ads_prefs_cds_from_legacy_settings",storageKey:null}],storageKey:null}]},params:{id:b("PolarisSettingsShellQuery_instagramRelayOperation"),metadata:{},name:"PolarisSettingsShellQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("usePolarisSettingsItems_fxcalSettings.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisSettingsItems_fxcalSettings",selections:[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"nodes",value:["APPS_WEBSITES_SETTINGS"]}],kind:"ScalarField",name:"should_show_nodes_in_accounts_center",storageKey:'should_show_nodes_in_accounts_center(nodes:["APPS_WEBSITES_SETTINGS"])'}],storageKey:null},{alias:null,args:null,concreteType:"FXAccountsCenterRouteRequirement",kind:"LinkedField",name:"fx_accounts_center_route_requirement",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_user_see_ads_prefs_cds_from_legacy_settings",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"usePolarisFXCalSettings"}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("IGDSAdPanoOutline24Icon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:[h.jsx("path",{d:"M18.44 1H5.56A4.565 4.565 0 0 0 1 5.561v12.878A4.565 4.565 0 0 0 5.56 23h12.88A4.566 4.566 0 0 0 23 18.44V5.56A4.566 4.566 0 0 0 18.44 1ZM21 18.44A2.564 2.564 0 0 1 18.44 21H5.56A2.563 2.563 0 0 1 3 18.44V5.56A2.563 2.563 0 0 1 5.56 3h12.88A2.564 2.564 0 0 1 21 5.561Z"}),h.jsx("path",{d:"M12 16H6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6-10H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-1 6H7V8h10Zm1 4h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z"})]}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("IGDSCardOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{aspectRatio:1.411764705882353,viewBox:"0 0 24 17",children:h.jsx("path",{d:"M20.75 0a2.75 2.75 0 0 1 2.75 2.75v11a2.75 2.75 0 0 1-2.75 2.75h-18A2.75 2.75 0 0 1 0 13.75v-11A2.75 2.75 0 0 1 2.75 0h18ZM22 7.45H1.5v6.3c0 .69.56 1.25 1.25 1.25h18c.69 0 1.25-.56 1.25-1.25v-6.3Zm-13.25 4.8A.75.75 0 0 1 8 13H4.5a.75.75 0 1 1 0-1.5H8a.75.75 0 0 1 .75.75Zm9 0A.75.75 0 0 1 17 13h-6.5a.75.75 0 1 1 0-1.5H17a.75.75 0 0 1 .75.75Zm3-10.75h-18c-.69 0-1.25.56-1.25 1.25v1.7H22v-1.7c0-.69-.56-1.25-1.25-1.25Z",fill:"currentColor"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("PolarisCompanyLayerSettingsSectionItem.react",["IGDSBox.react","IGDSText.react","PolarisFXAccountCenterStrings","PolarisIGCoreMetaLogoPrimaryIcon","PolarisIGCorePressable","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b,e=!1;a.shouldShowNewAppEntrypoint!=null&&(e=a.shouldShowNewAppEntrypoint);e?(e="primaryText",b="primaryText"):(e="secondaryText",b="primaryButton");return h.jsxs(c("PolarisIGCorePressable"),{onPress:a.onClick,style:{cursor:"pointer",display:"flex",flexDirection:"column"},children:[h.jsx(c("PolarisIGCoreMetaLogoPrimaryIcon"),{alt:d("PolarisFXAccountCenterStrings").WATERMARK_FAMILY_APPS_LOGO_ALT,color:"ig-primary-text",size:60}),h.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:h.jsx(c("IGDSText.react"),{color:b,size:"label",textAlign:"start",weight:"semibold",children:a.title})}),h.jsx(c("IGDSBox.react"),{alignItems:"start",marginTop:4,position:"relative",children:h.jsx(c("IGDSText.react").Body2,{color:e,textAlign:"start",children:a.description})}),a.additionalInformation]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFXAccountCenterEntrypointInformation.react",["IGDSAdPanoOutline24Icon","IGDSBox.react","IGDSCardOutlineIcon","IGDSShieldPanoOutlineIcon","IGDSText.react","IGDSUserPanoOutlineIcon","PolarisFXAccountCenterStrings","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=d("PolarisUA").isMobile();return h.jsxs("div",{children:[h.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",marginTop:3,position:"relative",children:[h.jsx(c("IGDSBox.react"),{position:"relative",children:h.jsx(c("IGDSUserPanoOutlineIcon"),{alt:"",color:"ig-primary-text",size:16})}),h.jsx(c("IGDSBox.react"),{paddingX:2,position:"relative",width:"100%",children:h.jsx(c("IGDSText.react").Body2,{color:"primaryText",textAlign:"start",children:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_PERSONAL_DETAILS_TEXT})})]}),h.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",marginTop:2,position:"relative",children:[h.jsx(c("IGDSBox.react"),{display:"flex",position:"relative",children:h.jsx(c("IGDSShieldPanoOutlineIcon"),{alt:"",color:"ig-primary-text",size:16})}),h.jsx(c("IGDSBox.react"),{paddingX:2,position:"relative",width:"100%",children:h.jsx(c("IGDSText.react").Body2,{color:"primaryText",textAlign:"start",children:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_PASSWORD_AND_SECURITY_TEXT})})]}),h.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",marginTop:2,position:"relative",children:[h.jsx(c("IGDSBox.react"),{position:"relative",children:h.jsx(c("IGDSAdPanoOutline24Icon"),{alt:"",color:"ig-primary-text",size:16})}),h.jsx(c("IGDSBox.react"),{paddingX:2,position:"relative",width:"100%",children:h.jsx(c("IGDSText.react").Body2,{color:"primaryText",textAlign:"start",children:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_AD_PREFERENCES_TEXT})})]}),a.shouldShowPaymentsRow&&h.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",marginTop:2,position:"relative",children:[h.jsx(c("IGDSBox.react"),{position:"relative",children:h.jsx(c("IGDSCardOutlineIcon"),{alt:"",color:"ig-primary-text",size:16})}),h.jsx(c("IGDSBox.react"),{paddingX:2,position:"relative",width:"100%",children:h.jsx(c("IGDSText.react").Body2,{color:"primaryText",textAlign:"start",children:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_ADS_PAYMENTS_TEXT})})]}),h.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:h.jsxs(c("IGDSBox.react"),{position:"relative",children:[!b&&h.jsx(c("IGDSText.react").BodyEmphasized,{color:"primaryButton",textAlign:"start",children:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_SEE_MORE_TEXT}),b&&h.jsx(c("IGDSText.react").BodyEmphasized,{color:"primaryButton",textAlign:"start",children:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_SEE_MORE_TEXT})]})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFXSettingsFalcoEvent",["PolarisConfig","PolarisFalcoLogger","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){a=babelHelpers["extends"]({viewer_account_id:c("nullthrows")(d("PolarisConfig").getViewerId())},a);d("PolarisFalcoLogger").FalcoLogger.log("fxcal_settings_product",a,{},h)}};b=a;g["default"]=b}),98);
__d("PolarisFXCalSettingsCLFooter.react",["PolarisCompanyLayerSettingsSectionItem.react","PolarisFXAccountCenterEntrypointInformation.react","PolarisFXAccountCenterStrings","PolarisFXSettingsFalcoEvent","PolarisNavigationUtils","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b="https://accountscenter.instagram.com/?entry_point=app_settings",e=function(){c("PolarisFXSettingsFalcoEvent").log({ac_phase:a.acPhase,entry_point:"app_settings",event:"settings_entrypoint_navigate",is_cds:!0}),d("PolarisNavigationUtils").openURLWithFullPageReload(b)};return a.shouldShowNewAppEntrypoint?h.jsx(c("PolarisCompanyLayerSettingsSectionItem.react"),{additionalInformation:h.jsx(c("PolarisFXAccountCenterEntrypointInformation.react"),{shouldShowPaymentsRow:a.shouldShowPaymentsRow}),description:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_DESCRIPTION_NEW_APP_IA,onClick:e,shouldShowNewAppEntrypoint:!0,title:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_DIALOG_TITLE}):h.jsx(c("PolarisCompanyLayerSettingsSectionItem.react"),{description:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_DESCRIPTION,onClick:e,title:d("PolarisFXAccountCenterStrings").ACCOUNT_CENTER_DIALOG_TITLE})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisCompanyLayerSettingsSectionFooter.react",["cx","IGDSBox.react","IGDSDivider.react","PolarisFXCalSettingsCLFooter.react","PolarisUA","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=!1,e=!1;a.shouldShowNewAppEntrypoint!=null&&(b=a.shouldShowNewAppEntrypoint);a.shouldShowPaymentsRow!=null&&(e=a.shouldShowPaymentsRow);var f=d("PolarisUA").isMobile();return i.jsxs("div",{className:"_aav4"+(f?"":" _aav5")+(f?" _aav6":""),children:[!f&&!b&&i.jsx(c("IGDSDivider.react"),{}),i.jsx(c("IGDSBox.react"),{alignItems:"start",marginBottom:7,marginEnd:5,marginStart:f?4:8,marginTop:7,position:"relative",children:i.jsx(c("PolarisFXCalSettingsCLFooter.react"),{acPhase:a.acPhase,shouldShowNewAppEntrypoint:b,shouldShowPaymentsRow:e})}),!f&&b&&i.jsx(c("IGDSDivider.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFXCentralizedSettingsContextualMessage.react",["cx","IGDSText.react","PolarisExternalLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b;return a.content===null||a.primary_action_title===null||a.primary_action_uri===null?i.jsx("div",{}):i.jsxs("div",{className:"_aca_",children:[i.jsx(c("IGDSText.react"),{size:"body",children:a.content}),i.jsx(c("PolarisExternalLink.react"),{className:"_acb0",href:(b=a.primary_action_uri)!=null?b:"",target:"_blank",children:a.primary_action_title})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFXPreTransitionBanner.react",["cx","CometRelay","IGDSBox.react","IGDSDivider.react","IGDSText.react","PolarisFXAccountCenterStrings","PolarisFXPreTransitionBannerQuery.graphql","PolarisIGCoreMetaLogoPrimaryIcon","PolarisIGCorePressable","PolarisNavigationUtils","PolarisUA","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(){var a=d("PolarisUA").isMobile(),e=d("CometRelay").useLazyLoadQuery(i!==void 0?i:i=b("PolarisFXPreTransitionBannerQuery.graphql"),{});e=e.fxcal_settings;var f=(e=e==null?void 0:e.ac_transition_pre_transition_banner)!=null?e:null;e=function(){f!==null&&d("PolarisNavigationUtils").openURLWithFullPageReload(f.primary_action_uri,{openInNewTab:!0})};return j.jsxs("div",{className:"_ab6i",children:[j.jsxs(c("IGDSBox.react"),{alignItems:"start",marginBottom:4,marginEnd:5,marginStart:a?4:8,marginTop:7,position:"relative",children:[j.jsx(c("PolarisIGCoreMetaLogoPrimaryIcon"),{alt:d("PolarisFXAccountCenterStrings").WATERMARK_FAMILY_APPS_LOGO_ALT,color:"ig-primary-text",size:60}),j.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:j.jsx(c("IGDSText.react"),{color:"primaryText",size:"label",weight:"semibold",children:f==null?void 0:f.title})}),j.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:j.jsx(c("IGDSText.react").Body,{color:"primaryText",children:f==null?void 0:f.content})}),j.jsx(c("IGDSBox.react"),{marginTop:4,position:"relative",children:j.jsxs(c("PolarisIGCorePressable"),{onPress:e,style:{cursor:"pointer"},children:[!a&&j.jsx(c("IGDSText.react"),{color:"primaryButton",size:"label",children:f==null?void 0:f.primary_action_title}),a&&j.jsx(c("IGDSText.react").BodyEmphasized,{color:"primaryButton",children:f==null?void 0:f.primary_action_title})]})})]}),!a&&j.jsx(c("IGDSDivider.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FxLegacySettingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2514");b=d("FalcoLoggerInternal").create("fx_legacy_setting",a);e=b;g["default"]=e}),98);
__d("PolarisFXSettingLogClick",["FxLegacySettingFalcoEvent","PolarisConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){c("FxLegacySettingFalcoEvent").logImmediately(function(){return babelHelpers["extends"]({entry_point:"app_settings",event:"click",initiator_account_id:d("PolarisConfig").getViewerIdOrZero()},a)})}g["default"]=a}),98);
__d("PolarisProfessionalConversionDialog.react",["IGCoreDialog","IGDSBox.react","IGDSSpinner.react","PolarisGenericStrings","PolarisProfessionalConversionCardTypeConfigs.react","PolarisProfessionalConversionUtils","PolarisProfileEditStrings","PolarisReactRedux","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.isMv4bVerified,e=a.loading,f=a.onClose;a=a.onContinue;b=b?d("PolarisProfessionalConversionCardTypeConfigs.react").SWITCHBACK_PERSONAL_CARD_FOR_MV4B_CONFIGS:d("PolarisProfessionalConversionCardTypeConfigs.react").SWITCHBACK_PERSONAL_CARD_CONFIGS;return h.jsxs(d("IGCoreDialog").IGCoreDialog,{body:b.subtitle,onModalClose:f,title:b.title,children:[h.jsx(c("IGDSBox.react"),{flex:"grow",position:"relative",children:h.jsxs(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",disabled:e,onClick:a,children:[e&&h.jsx(c("IGDSSpinner.react"),{position:"absolute",size:"small"}),d("PolarisProfileEditStrings").SWITCH_BACK]})}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-secondary-button",onClick:f,children:d("PolarisGenericStrings").CANCEL_TEXT})]})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.onClose;a=a.onContinue;var c=d("PolarisReactRedux").useSelector(function(a){return a.professionalConversion});c=c.accountType;c=c===d("PolarisProfessionalConversionUtils").InterestAccount.media_creator?d("PolarisProfessionalConversionCardTypeConfigs.react").CREATOR_PRIVACY_CARD_CONFIGS:d("PolarisProfessionalConversionCardTypeConfigs.react").BUSINESS_PRIVACY_CARD_CONFIGS;return h.jsxs(d("IGCoreDialog").IGCoreDialog,{body:c.subtitle,onModalClose:b,title:c.title,children:[h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",onClick:a,children:d("PolarisProfileEditStrings").CONTINUE}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-secondary-button",onClick:b,children:d("PolarisGenericStrings").CANCEL_TEXT})]})}b.displayName=b.name+" [from "+f.id+"]";g.PersonalConversionDialog=a;g.ProfessionalConversionPrivacyDialog=b}),98);
__d("PolarisProfessionalAccountSection.react",["IGDSBox.react","IGDSButton.react","IGDSText.react","PolarisFastLink.react","PolarisIGCoreToast","PolarisProfessionalConversionActions","PolarisProfessionalConversionDialog.react","PolarisProfileEditStrings","PolarisReactRedux","PolarisRoutes","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState;function a(){return h.jsx(c("IGDSBox.react"),{color:"primaryBackground",flex:"grow",position:"relative",children:h.jsx(c("IGDSBox.react"),{marginStart:d("PolarisUA").isMobile()?0:4,padding:4,position:"relative",children:h.jsx(c("PolarisFastLink.react"),{href:d("PolarisRoutes").CONVERT_TO_PROFESSIONAL_ACCOUNT_PATH,children:h.jsx(c("IGDSText.react").BodyEmphasized,{color:"primaryButton",textAlign:"start",children:d("PolarisProfileEditStrings").SWITCH_TO_PROFESSIONAL_ACCOUNT})})})})}a.displayName=a.name+" [from "+f.id+"]";function j(a){a=a.onClick;return h.jsx(c("IGDSBox.react"),{color:"primaryBackground",flex:"grow",position:"relative",children:h.jsx(c("IGDSBox.react"),{marginStart:d("PolarisUA").isMobile()?0:4,padding:4,position:"relative",children:h.jsx(c("IGDSText.react").Label,{textAlign:"start",children:h.jsx(c("IGDSButton.react"),{display:"block",label:d("PolarisProfileEditStrings").SWITCH_TO_PERSONAL_ACCOUNT,onClick:a,variant:"primary_link"})})})})}j.displayName=j.name+" [from "+f.id+"]";function b(a){a=a.isMv4bVerified;var b=d("PolarisReactRedux").useSelector(function(a){return a.professionalConversion}),e=b.requestInFlight;b=b.toastMessage;var f=d("PolarisReactRedux").useDispatch(),g=i(e),k=g[0],l=g[1];g=b!=="";return h.jsxs(h.Fragment,{children:[h.jsx(j,{onClick:function(){l(!0)}}),k&&h.jsx(d("PolarisProfessionalConversionDialog.react").PersonalConversionDialog,{isMv4bVerified:a,loading:e,onClose:function(){l(!1)},onContinue:function(){f(d("PolarisProfessionalConversionActions").setRequestInFlight(!0)),f(d("PolarisProfessionalConversionActions").convertToPersonalAccount())}}),g&&h.jsx(c("PolarisIGCoreToast"),{duration:1500,onClose:function(){f(d("PolarisProfessionalConversionActions").clearToastMessage())},children:b})]})}b.displayName=b.name+" [from "+f.id+"]";g.ProfessionalConversionButton=a;g.PersonalSwitchbackSection=b}),98);
__d("PolarisSettingsFormRow.react",["cx","isStringNullOrEmpty","joinClasses","keyMirror","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("keyMirror")({defaultVariant:null,wideLabel:null});function a(a){var b=a.children,d=a.className,e=a.label,f=a.labelledID;a=a.variant;return i.jsxs("div",{className:c("joinClasses")("_ab3p",d),children:[i.jsx("aside",{className:(a==null||a===j.defaultVariant?"_ad6_":"")+(a===j.wideLabel?" _ad70":"")+(e?"":" _ad71"),children:i.jsx("label",{className:"_ab3q",htmlFor:c("isStringNullOrEmpty")(f)?null:f,children:e})}),i.jsx("div",{className:"_ab3t",children:b})]})}a.displayName=a.name+" [from "+f.id+"]";a.VARIANTS=j;g["default"]=a}),98);
__d("PolarisSettingsModuleHeader.react",["cx","IGDSBox.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.endAdornment;a=a.headerText;return i.jsxs(c("IGDSBox.react"),{alignItems:"end",direction:"row",marginBottom:6,position:"relative",children:[i.jsx(c("IGDSBox.react"),{flex:"grow",position:"relative",children:i.jsx("h2",{className:"_acl0",children:a})}),b!=null&&b]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FXACPhase",[],(function(a,b,c,d,e,f){a=Object.freeze({NON_CENTRALIZED_SETTINGS:"NON_CENTRALIZED_SETTINGS",CENTRALIZED_SETTINGS_NO_SENSITIVE:"CENTRALIZED_SETTINGS_NO_SENSITIVE",CENTRALIZED_SETTINGS_WITH_SENSITIVE:"CENTRALIZED_SETTINGS_WITH_SENSITIVE"});f["default"]=a}),66);
__d("getJSEnumSafe",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(b==null)return null;if(!Object.prototype.hasOwnProperty.call(a,b))return null;b=b;return a[b]}f["default"]=a}),66);
__d("usePolarisSettingsItems",["fbt","CometRelay","PolarisAdsGatingHelpers","PolarisFXSettingLogClick","PolarisNavigationStrings","PolarisNavigationUtils","PolarisQueryParamsHelper","PolarisRoutes","gkx","justknobx","qex","react","usePolarisFXCalSettings.react","usePolarisSettingsItems_fxcalSettings.graphql","usePolarisViewer"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react").useMemo,k={onClick:function(){c("PolarisFXSettingLogClick")({additional_data:"orders_and_payments"})},pageIdentifier:"OrdersAndPayments",text:h._("__JHASH__qvq1G4Apx-q__JHASH__"),url:d("PolarisRoutes").ORDERS_AND_PAYMENTS_PATH},l={onClick:function(){c("PolarisFXSettingLogClick")({additional_data:"edit_profile"})},pageIdentifier:"editProfile",text:h._("__JHASH__j05XsvHq10Q__JHASH__"),url:d("PolarisRoutes").PROFILE_EDIT_PATH},m={pageIdentifier:"adsSettingsPage",text:h._("__JHASH__Zn1pvRlPwy0__JHASH__"),url:d("PolarisRoutes").ADS_SETTINGS_PATH},n={onClick:function(){d("PolarisNavigationUtils").openURLWithFullPageReload("https://accountscenter.instagram.com/ad_preferences/?entry_point=app_settings")},pageIdentifier:"adsSettingsPage",text:h._("__JHASH__Zn1pvRlPwy0__JHASH__"),url:""},o={pageIdentifier:"professionalAccountSettingsPage",text:h._("__JHASH__Q-AlqXD7Z_w__JHASH__"),url:d("PolarisRoutes").PROFESSIONAL_ACCOUNT_SETTINGS_PATH},p={onClick:function(){c("PolarisFXSettingLogClick")({service_id:"password_change"})},pageIdentifier:"changePassword",text:h._("__JHASH__mVgNkX0632H__JHASH__"),url:d("PolarisRoutes").PASSWORD_CHANGE_PATH},q={onClick:function(){c("PolarisFXSettingLogClick")({additional_data:"apps_and_websites"})},pageIdentifier:"manageApplications",text:h._("__JHASH__5qQmz7bKoyu__JHASH__"),url:d("PolarisQueryParamsHelper").appendQueryParams(d("PolarisRoutes").MANAGED_ACCESS_PATH,{source:"web_settings"})},r={pageIdentifier:"emailPreferences",text:h._("__JHASH__kbcAdIe7Dh3__JHASH__"),url:d("PolarisRoutes").EMAIL_SETTINGS_PATH},s={pageIdentifier:"emailsSentPage",text:h._("__JHASH__G9cf9gJCZbt__JHASH__"),url:d("PolarisRoutes").EMAILS_SENT_PATH},t={pageIdentifier:"HelpCenterPage",text:h._("__JHASH__kWtkXNizkqp__JHASH__"),url:d("PolarisRoutes").HELP_CENTER_PATH},u={pageIdentifier:"pushPreferences",text:h._("__JHASH__xm4rZ7Egkke__JHASH__"),url:d("PolarisRoutes").PUSH_PREFERENCES_PATH},v={pageIdentifier:"contactsManagement",text:h._("__JHASH__N6wX_9KM-_A__JHASH__"),url:d("PolarisRoutes").CONTACT_HISTORY_PATH},w={pageIdentifier:"notificationsPreferences",text:h._("__JHASH__2B3CF8kcTFZ__JHASH__"),url:d("PolarisRoutes").NOTIFICATIONS_PREFERENCES_PATH},x={onClick:function(){c("PolarisFXSettingLogClick")({additional_data:"privacy_and_security"})},pageIdentifier:"privacyAndSecurityPage",text:h._("__JHASH__avJ204uPryD__JHASH__"),url:d("PolarisRoutes").PRIVACY_AND_SECURITY_PATH},y={pageIdentifier:"privacyPage",text:h._("__JHASH__KmiksF5P4Zo__JHASH__"),url:d("PolarisRoutes").PRIVACY_AND_SECURITY_PATH},z={onClick:function(){c("PolarisFXSettingLogClick")({additional_data:"who_can_see_your_content"})},pageIdentifier:"whoCanSeeYourContent",text:d("PolarisNavigationStrings").WHO_CAN_SEE_YOUR_CONTENT,url:d("PolarisRoutes").WHO_CAN_SEE_YOUR_CONTENT_PATH},A={onClick:function(){c("PolarisFXSettingLogClick")({additional_data:"what_you_see"})},pageIdentifier:"whatYouSeePage",text:d("PolarisNavigationStrings").WHAT_YOU_SEE,url:d("PolarisRoutes").WHAT_YOU_SEE_PATH},B={onClick:function(){c("PolarisFXSettingLogClick")({additional_data:"how_others_can_interact"})},pageIdentifier:"howOthersCanInteract",text:d("PolarisNavigationStrings").HOW_OTHERS_CAN_INTERACT,url:d("PolarisRoutes").HOW_OTHERS_CAN_INTERACT_PATH},C={onClick:function(){c("PolarisFXSettingLogClick")({service_id:"login_activities"})},pageIdentifier:"loginActivityPage",text:h._("__JHASH__AQqiU6-4uNS__JHASH__"),url:d("PolarisRoutes").LOGIN_ACTIVITY_PATH},D={pageIdentifier:"DigitalCollectiblesCometPage",text:h._("__JHASH__kzIyxR9H1Tz__JHASH__"),url:d("PolarisRoutes").DIGITAL_COLLECTIBLES_COMET_PATH},E={linkTarget:"_blank",pageIdentifier:"SupervisionPage",text:h._("__JHASH__eb06f4kagHI__JHASH__"),url:d("PolarisRoutes").SUPERVISION_PATH},F={pageIdentifier:"languagePreferencesPage",text:h._("__JHASH__ofTSf5oFYnb__JHASH__"),url:d("PolarisRoutes").LANGUAGE_PREFERENCES_PATH};function G(a,b,c,d){var e=!1,f=!0,g=!0;c==null?e=!0:c===!0?(e=!0,f=!1):g=!1;if(((a==null?void 0:a.isSupervisionEnabled)==null||(a==null?void 0:a.isSupervisionEnabled)===!1)&&b.pageIdentifier==="SupervisionPage")return!1;if(b.pageIdentifier==="professionalAccountSettingsPage"&&(a==null?void 0:a.isProfessionalAccount)===!1)return!1;if(g&&b.pageIdentifier==="privacyAndSecurityPage")return!1;if(f&&b.pageIdentifier==="privacyPage")return!1;return e?d!==null&&d===!0&&b.pageIdentifier==="manageApplications"?!0:b.pageIdentifier!=="changePassword"&&b.pageIdentifier!=="manageApplications"&&b.pageIdentifier!=="contactsManagement"&&b.pageIdentifier!=="loginActivityPage"&&b.pageIdentifier!=="adsSettingsPage"&&b.pageIdentifier!=="emailsSentPage":!0}var H=i!==void 0?i:i=b("usePolarisSettingsItems_fxcalSettings.graphql");function a(a){a=a.queryRef;var b=d("CometRelay").useFragment(H,a);a=c("usePolarisFXCalSettings.react")({frag_key:b});var e=a.projectElevationEnabled,f=a.shouldHideLoginActivities,g=a.shouldHidePasswordChange,h=a.shouldShowNewAppIA,i=a.shouldShowSensitiveSettings,I=c("usePolarisViewer")();return j(function(){var a,j=[l,o];c("gkx")("6787")&&j.push(F);g||j.push(p);(!(b==null?void 0:(a=b.fxcal_settings)==null?void 0:a.should_show_nodes_in_accounts_center.includes("apps_websites_settings".toUpperCase()))||i)&&j.push(q);c("qex")._("512")===!0?j.push(w):j.push(r,u);j.push(v);h&&e?j.push(A,z,B):j.push(x,y);if(d("PolarisAdsGatingHelpers").allowWebAds()){(b==null?void 0:(a=b.fx_accounts_center_route_requirement)==null?void 0:a.can_user_see_ads_prefs_cds_from_legacy_settings)===!0?j.push(n):j.push(m)}j.push(E);!c("justknobx")._("71")&&!f&&j.push(C);j.push(s);j.push(t);c("qex")._("628")&&j.push(D);a=c("gkx")("4263");a&&j.push(k);return j.filter(function(a){return G(I,a,h,i)})},[b==null?void 0:(a=b.fx_accounts_center_route_requirement)==null?void 0:a.can_user_see_ads_prefs_cds_from_legacy_settings,b==null?void 0:(a=b.fxcal_settings)==null?void 0:a.should_show_nodes_in_accounts_center,e,f,g,h,i,I])}g["default"]=a}),98);
__d("PolarisSettingsShell.react",["fbt","CometRelay","FXACPhase","FxLegacySettingFalcoEvent","PolarisCompanyLayerSettingsSectionFooter.react","PolarisConditionalPageLayoutHandler.react","PolarisConfig","PolarisFXPreTransitionBanner.react","PolarisProfessionalAccountSection.react","PolarisQPConstants","PolarisQPManager.react","PolarisReactRedux","PolarisSettingsShellQuery.graphql","PolarisUA","cr:7284","getJSEnumSafe","polarisUserSelectors","react","usePolarisFXCalSettings.react","usePolarisSettingsItems"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useEffect,l=h._("__JHASH___HJ16l2KRv___JHASH__");function a(a){var e=a.children,f=a.hideNavigation,g=a.pageIdentifier;a=a.title;var h=d("PolarisReactRedux").useSelector(d("polarisUserSelectors").getViewer),m=d("CometRelay").useLazyLoadQuery(i!==void 0?i:i=b("PolarisSettingsShellQuery.graphql"),{}),n=c("usePolarisFXCalSettings.react")({frag_key:m}),o=n.projectElevationEnabled,p=n.shouldSeePreTransitionBanner,q=n.shouldShowNewAppEntrypoint,r=n.shouldShowNewAppIA;n=n.shouldShowPaymentsRow;var s=c("usePolarisSettingsItems")({queryRef:m});k(function(){d("PolarisUA").isDesktop()&&c("FxLegacySettingFalcoEvent").log(function(){return{entry_point:"app_settings",event:"ig_sidebar_impression",initiator_account_id:d("PolarisConfig").getViewerIdOrZero()}})},[]);p=p!=null&&p===!0;p=j.jsxs(j.Fragment,{children:[p&&j.jsx(c("PolarisFXPreTransitionBanner.react"),{}),q!=null&&q&&n!=null&&j.jsxs(j.Fragment,{children:[j.jsx(c("PolarisCompanyLayerSettingsSectionFooter.react"),{acPhase:c("getJSEnumSafe")(c("FXACPhase"),m==null?void 0:(p=m.fxcal_settings)==null?void 0:p.ac_phase),shouldShowNewAppEntrypoint:q,shouldShowPaymentsRow:n}),j.jsx(c("PolarisQPManager.react"),{slot:d("PolarisQPConstants").SLOTS.settings})]})]});h=j.jsxs(j.Fragment,{children:[(h==null?void 0:h.isProfessionalAccount)===!1&&j.jsx(d("PolarisProfessionalAccountSection.react").ProfessionalConversionButton,{}),(h==null?void 0:h.isProfessionalAccount)===!0&&j.jsx(d("PolarisProfessionalAccountSection.react").PersonalSwitchbackSection,{isMv4bVerified:(h==null?void 0:h.isVerifiedByMv4b)===!0}),q!=null&&!q&&n!=null&&j.jsx(c("PolarisCompanyLayerSettingsSectionFooter.react"),{acPhase:c("getJSEnumSafe")(c("FXACPhase"),m==null?void 0:(h=m.fxcal_settings)==null?void 0:h.ac_phase),shouldShowNewAppEntrypoint:q,shouldShowPaymentsRow:n})]});q=j.jsx(b("cr:7284"),{hideNavigation:f,menuFooter:h,menuHeader:p,menuItems:s,pageIdentifier:g,queryRef:m,shellTitle:r&&o?l:null,title:a,children:e});return j.jsx(c("PolarisConditionalPageLayoutHandler.react"),{mainComponent:q})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSideMenuItem.react",["cx","IGDSText.react","PolarisFastLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a){var b=a.isActive,d=a.secondaryText;a=a.text;return i.jsxs("div",{className:"_ad7z"+(d!=null?" _ad7-":""),children:[b?i.jsx(c("IGDSText.react").BodyEmphasized,{children:a}):i.jsx(c("IGDSText.react").Body,{children:a}),d!=null&&i.jsx("div",{className:"_ad7_",children:i.jsx(c("IGDSText.react").Body2,{color:"secondaryText",children:d})})]})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=a.accessibilityText,d=a.icon,e=a.isActive,f=a.onClick,g=a.pageIdentifier,h=a.secondaryText,k=a.text;a=a.url;h=i.jsx("div",{children:i.jsx(j,{isActive:e,secondaryText:h,text:k})});k=h;if(d!=null&&b!=null){d=d;k=i.jsxs("div",{className:"_ad80",children:[i.jsx("div",{className:"_ad81",children:i.jsx(d,{alt:b,color:"ig-primary-icon",size:24})}),h]})}return i.jsx("li",{children:i.jsx(c("PolarisFastLink.react"),{className:"_ab86"+(e?" _ab87":"")+(e?"":" _ab88"),display:"block",href:a,onClick:f,children:k})},g)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSideMenu.react",["cx","PolarisSideMenuItem.react","PolarisUA","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a,b){return a.pageIdentifier===b}function a(a){var b=a.menuHeader,e=a.menuFooter,f=a.menuItems;f=f===void 0?[]:f;var g=a.pageIdentifier;a=d("PolarisUA").isMobile();if(a)return null;return f.length===0?i.jsx("div",{className:"_ab85"}):i.jsxs("ul",{className:"_ab85",children:[b,f.map(function(a){return i.createElement(c("PolarisSideMenuItem.react"),babelHelpers["extends"]({},a,{isActive:j(a,g),key:a.pageIdentifier}))}),e]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSideMenuShell.react",["cx","PolarisGenericMobileHeader.react","PolarisNavBackButton.react","PolarisShell.react","PolarisSideMenu.react","PolarisSizing","PolarisUA","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.children,e=a.hideNavigation,f=a.menuFooter,g=a.menuHeader,h=a.menuItems;h=h===void 0?[]:h;var j=a.pageIdentifier,k=a.title;a=a.shellTitle;return i.jsxs(c("PolarisShell.react"),{hideNavigation:e,maxWidth:d("PolarisSizing").SITE_WIDTHS.wide,mobileHeader:k!=null?i.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:i.jsx(c("PolarisNavBackButton.react"),{}),title:k}):null,pageIdentifier:j,children:[d("PolarisUA").isDesktop()&&a!=null?i.jsx("h1",{className:"_afws",children:a}):null,i.jsxs("div",{className:"_ab81"+(d("PolarisUA").isDesktop()?" _ab82":""),children:[i.jsx(c("PolarisSideMenu.react"),{menuFooter:f,menuHeader:g,menuItems:h,pageIdentifier:j}),i.jsx("article",{className:"_ab83",children:b})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);