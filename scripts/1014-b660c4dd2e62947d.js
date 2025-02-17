"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1014],{91014:function(e,t,n){n.d(t,{$H:function(){return w},$Y:function(){return k},CJ:function(){return S},Cy:function(){return Q},Gk:function(){return W},Ke:function(){return B},Ls:function(){return q},OD:function(){return O},PD:function(){return T},QR:function(){return b},Rq:function(){return y},W:function(){return z},_C:function(){return C},cj:function(){return R},f7:function(){return x},fc:function(){return j},gK:function(){return M},gm:function(){return U},j1:function(){return P},j7:function(){return I},jl:function(){return F},o:function(){return h},rI:function(){return K},y6:function(){return E}});var i=n(21468),r=n(89992),a=n(88075),o=n(17299),s=n(92068),l=n(49793),u=n(47859),c=n(71994),d=n(26821),v=n(63583),_=n(20053),g=n.n(_),p=n(67754),m=n(7653),f=n(52212);let h=(e,t)=>{let{activeOrganization:n}=(0,a.t)(),i=null==n?void 0:n.uuid;return(0,r.WE)("/api/organizations/".concat(i,"/chat_conversations/").concat(e,"/chat_messages/").concat(t,"/debug"),{queryKey:[l.Ep,{orgUUID:i},{conversationUuid:e},{messageUuid:t}],enabled:!!t})},y=e=>{let t=(0,d.useQueryClient)(),{activeOrganization:n}=(0,a.t)(),i=null==n?void 0:n.uuid,[r,o]=(0,m.useReducer)(e=>e+1,0),s=(0,u.B)([l.I8,{orgUUID:i},{uuid:e}]),c=(0,m.useMemo)(()=>t.getQueryData(s),[t,s,e,r]);return(0,m.useEffect)(()=>t.getQueryCache().subscribe(e=>{"updated"===e.type&&"success"===e.action.type&&(0,v._x)({queryKey:s},e.query)&&o()}),[t,o,s]),{data:c}},b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid,i=new URLSearchParams,{limit:o,offset:s,defer:u}=e;void 0!==o&&i.append("limit",o.toString()),void 0!==s&&i.append("offset",s.toString());let c=i.toString();return c=c?"?".concat(c):"",(0,r.WE)("/api/organizations/".concat(null!=n?n:"","/chat_conversations").concat(c),{queryKey:[l.tv,{orgUUID:n},{limit:o,offset:s}],staleTime:3e5,enabled:!u&&!!n})},C=function(e){let{suppressError:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{activeOrganization:n}=(0,a.t)(),i=null==n?void 0:n.uuid,o=(0,m.useRef)([]),s=(0,d.useQueryClient)(),u="/api/organizations/".concat(null!=i?i:"","/chat_conversations/").concat(e,"?tree=True&rendering_mode=messages&render_all_tools=true"),c=(0,r.WE)(u,{queryKey:[l.I8,{orgUUID:i},{uuid:e}],staleTime:3e5,enabled:!!i&&!!e,meta:{noToast:t}},t=>(s.invalidateQueries({queryKey:[l.Gj,{orgUUID:i,conversationUUID:e}]}),(0,f.fX)(t))),v=(0,m.useMemo)(()=>{if(!c.data)return o.current=[],o.current;let e=(0,f.kX)(c.data);if(e.length!==o.current.length||e.some((e,t)=>{var n;return e.uuid!==(null===(n=o.current[t])||void 0===n?void 0:n.uuid)}))return o.current=e,o.current;for(let t=0;t<e.length;t++)g()(e[t],o.current[t])||(o.current[t]=e[t]);return o.current},[c.data]);return{...c,currentPath:v}},w=(e,t)=>{let{mutate:n}=k(),i=(0,p.useRouter)(),r=t||(0,c.H)();return(0,m.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{model:void 0,controlsOpen:!1};n({uuid:r,name:"",model:t.model});let a="/chat/".concat(r).concat(t.controlsOpen?"?controls=1":"");i[e](a)},[n,i,e,r])},k=()=>{let{activeOrganization:e}=(0,a.t)(),t=null==e?void 0:e.uuid,n=(0,d.useQueryClient)(),i=[l.tv,{orgUUID:t}],o=e=>[l.ph,{orgUUID:t},{uuid:e}],s=e=>[l.I8,{orgUUID:t},{uuid:e}];return(0,r.uC)("/api/organizations/".concat(null!=t?t:"","/chat_conversations"),"POST",{enabled:!!t,async onMutate(e){let t=o(e.uuid),r={summary:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString(),...e};await Promise.all([n.cancelQueries({queryKey:i}),n.cancelQueries({queryKey:t})]),n.setQueryData(i,e=>e&&[r,...e]),n.setQueryData(t,e=>({...e||{},...r,chat_messages:(null==e?void 0:e.chat_messages)||[]}))},onSuccess:e=>{n.setQueryData(i,t=>{if(!t)return;let n=t.findIndex(t=>t.uuid===e.uuid);if(-1===n)return t;let i=[...t];return i.splice(n,1,e),i}),n.setQueryData(s(e.uuid),t=>({...t||{},...e,chat_messages:(null==t?void 0:t.chat_messages)||[],messageByUuid:new Map,parentByChildUuid:new Map,childrenByParentUuid:new Map,selectedChildByUuid:new Map})),N(n,t)},onError(e,t){n.setQueryData(i,e=>null==e?void 0:e.filter(e=>e.uuid!==t.uuid)),n.setQueryData(o(t.uuid),void 0)}})},P=()=>{let{activeOrganization:e}=(0,a.t)(),t=null==e?void 0:e.uuid,n=(0,d.useQueryClient)();return(0,r.Ne)(e=>"/api/organizations/".concat(null!=t?t:"","/chat_conversations/").concat(e),"DELETE",(e,t)=>{if(!t)return[];let n=t.findIndex(t=>t.uuid===e);if(!(n>-1))return t;{let e=[...t];return e.splice(n,1),e}},{enabled:!!t,queryKey:[l.tv,{orgUUID:t}],onSuccess:async(e,i)=>{await n.invalidateQueries({queryKey:[l.I8,{orgUUID:t},{uuid:i}]}),await N(n,t)}})},x=e=>{let{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid,i=(0,d.useQueryClient)();return(0,r.uC)("/api/organizations/".concat(n,"/chat_conversations/delete_many"),"POST",{onSuccess:async t=>{await N(i,n),e&&e(t)}})},U=()=>{let{activeOrganization:e}=(0,a.t)(),t=null==e?void 0:e.uuid,n=null==e?void 0:e.capabilities.includes("raven");return(0,r.WE)("/api/organizations/".concat(t,"/shares"),{queryKey:[l.PB,{orgUUID:t}],enabled:!!t&&n,staleTime:3e5})},Q=e=>{let{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid;return(0,r.WE)("/api/organizations/".concat(n,"/chat_conversations/").concat(e,"/latest"),{enabled:!!n&&!!e,queryKey:[l.Gj,{orgUUID:n,conversationUUID:e}],staleTime:0,meta:{noToast:!0}},e=>{let{snapshot:t,shareable:n,disabled_reason:i}=e;return{shareable:n,disabled_reason:i,snapshot:t?{...t,chat_messages:t.chat_messages.map(e=>(0,f.Dk)(e))}:null}})},S=e=>{let{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid;return(0,r.WE)("/api/organizations/".concat(n,"/chat_snapshots/").concat(e,"?rendering_mode=messages&render_all_tools=true"),{retry:!1,refetchInterval:!1,enabled:!!e,staleTime:0,queryKey:[l.ld,{orgUUID:n,snapshotUUID:e}]},e=>({...e,chat_messages:e.chat_messages.map(e=>(0,f.Dk)(e))}))},T=e=>{let{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid,i=(0,d.useQueryClient)();return(0,r.uC)("/api/organizations/".concat(n,"/chat_conversations/").concat(e,"/share"),"POST",{onSuccess:()=>{i.invalidateQueries({queryKey:[l.Gj,{orgUUID:n,conversationUUID:e}]}),i.invalidateQueries({queryKey:[l.PB,{orgUUID:n}]}),i.invalidateQueries({queryKey:[l.VH,{orgUUID:n}]})}})},q=(e,t)=>{let{activeOrganization:n}=(0,a.t)(),i=null==n?void 0:n.uuid,o=(0,d.useQueryClient)();return(0,r.uC)("/api/organizations/".concat(i,"/share/").concat(t),"DELETE",{enabled:!!i&&!!t,meta:{errorMessage:"There was an error while trying to unshare the conversation. Please try again."},onSuccess:()=>{o.invalidateQueries({queryKey:[l.Gj,{orgUUID:i,conversationUUID:e}]}),o.invalidateQueries({queryKey:[l.PB,{orgUUID:i}]}),o.invalidateQueries({queryKey:[l.VH,{orgUUID:i}]})}})},E=e=>{let{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid;return(0,r.WE)("/api/organizations/".concat(n,"/artifact-versions/").concat(e),{retry:!1,refetchInterval:!1,enabled:!!e,staleTime:0,queryKey:[l.qB,{artifactVersionUUID:e}]})},B=function(e,t,n){var s,u,c;let v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{track:_}=(0,i.z$)(),g=null!==(u=null===(s=(0,o.T)())||void 0===s?void 0:s.preview_feature_uses_artifacts)&&void 0!==u&&u,{activeOrganization:p}=(0,a.t)(),m=null==p?void 0:p.uuid,f=(0,d.useQueryClient)(),h=[l.I8,{orgUUID:m},{uuid:e}];return(0,r.uC)("/api/organizations/".concat(null!=m?m:"","/chat_conversations/").concat(e,"/chat_messages/").concat(null!==(c=t.uuid)&&void 0!==c?c:"","/chat_feedback"),t.chat_feedback?"PUT":"POST",{enabled:!!m,meta:{errorMessage:"We could not save your feedback. Please try again later."},...v,onSuccess(){for(var i,r,a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];_({event_key:"claudeai.conversation.feedback.sent",message_uuid:t.uuid,conversation_uuid:e,artifacts_enabled:g,conversationHasArtifacts:n,type:null===(i=t.chat_feedback)||void 0===i?void 0:i.type}),f.invalidateQueries({queryKey:h}),null===(r=v.onSuccess)||void 0===r||r.call(v,...o)}})},K=()=>{let{activeOrganization:e}=(0,a.t)(),t=null==e?void 0:e.uuid;return(0,r.uC)("/api/organizations/".concat(null!=t?t:"","/hfi/store_preference"),"POST",{enabled:!!t,meta:{errorMessage:"We could not save your feedback. Please try again later."}})},D=()=>{let e=(0,d.useQueryClient)(),{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid;return(0,m.useCallback)((t,i)=>{t&&(e.setQueryData([l.I8,{orgUUID:n},{uuid:t}],e=>e&&{...e,...i}),e.setQueriesData({queryKey:[l.tv,{orgUUID:n}]},e=>null==e?void 0:e.map(e=>e.uuid!==t?e:{...e,...i})))},[n,e])},z=e=>{let t=(0,d.useQueryClient)(),{activeOrganization:n}=(0,a.t)(),i=null==n?void 0:n.uuid,o=D();return(0,r.uC)("/api/organizations/".concat(i,"/chat_conversations/").concat(e),"PUT",{onMutate:n=>{var r;let{name:a}=n,s=t.getQueryData([l.I8,{orgUUID:i},{uuid:e}]);return o(e,{name:a}),{oldTitle:null!==(r=null==s?void 0:s.name)&&void 0!==r?r:""}},onError(t,n,i){i&&o(e,{name:i.oldTitle})}})},I=e=>{let t=D(),{activeOrganization:n}=(0,a.t)();return(0,r.uC)("/api/organizations/".concat(null==n?void 0:n.uuid,"/chat_conversations/").concat(e,"/title"),"POST",{onSuccess(n){let{title:i}=n;t(e,{name:null!=i?i:""})},meta:{noToast:!0}})};function O(e){var t,n;let i=(0,s.K)(e);return i+" "+e.attachments.map(e=>e.extracted_content).join(" ")+" "+((null===(t=e.content)||void 0===t?void 0:t.filter(e=>"tool_use"===e.type).map(e=>e.input?JSON.stringify(e.input):e.partial_json||"").join(" "))||"")+" "+((null===(n=e.content)||void 0===n?void 0:n.filter(e=>"tool_result"===e.type).flatMap(e=>e.content.filter(e=>"text"===e.type).map(e=>e.text)).join(" "))||"")}let M=e=>{let{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid;return(0,r.uC)("/api/organizations/".concat(n,"/chat_conversations/").concat(e,"/stop_response"),"POST")},j=()=>{let{activeOrganization:e}=(0,a.t)(),t=null==e?void 0:e.uuid;return(0,r.uC)(e=>{let{conversation_uuid:n}=e;return"/api/organizations/".concat(t,"/chat_conversations/").concat(n,"/tool_result")},"POST",{enabled:!!t,meta:{errorMessage:"We could not record the tool result. Please try again later."},transformVariables:e=>{let{conversation_uuid:t,...n}=e;return n}})},F=e=>{let{activeOrganization:t}=(0,a.t)(),n=null==t?void 0:t.uuid;return(0,r.uC)("/api/organizations/".concat(n,"/chat_conversations/").concat(e,"/current_leaf_message_uuid"),"PUT")},N=async(e,t)=>{await e.invalidateQueries({queryKey:[l.tv,{orgUUID:t}]})},W=e=>{let{activeOrganization:t}=(0,a.t)(),n=(0,d.useQueryClient)(),i=null==t?void 0:t.uuid;return(0,r.Ne)("/api/organizations/".concat(i,"/chat_conversations/").concat(e,"?rendering_mode=raw"),"PUT",(e,t)=>t?{...t,...e}:void 0,{onSuccess:()=>{N(n,i)},queryKey:[l.I8,{orgUUID:i},{uuid:e}]})},R=()=>{let{data:e,isLoading:t}=b();return{data:null==e?void 0:e.filter(e=>e.is_starred),isLoading:t}}},52212:function(e,t,n){n.d(t,{Dk:function(){return d},FC:function(){return o},Gg:function(){return u},HX:function(){return g},QC:function(){return l},fX:function(){return _},kX:function(){return m},mj:function(){return f},vv:function(){return p},w$:function(){return c},wZ:function(){return s}});var i=n(13623),r=n(57713),a=n.n(r);let o="new-assistant-message-uuid",s="new-human-message-uuid",l="00000000-0000-4000-8000-000000000000";function u(e,t){let n=e.get(t);if(void 0===n){let e=Error("Key not found: ".concat(t));throw(0,i.Tb)(e),e}return n}let c=(e,t)=>{let n=null!=t?t:e.current_leaf_message_uuid;if(!n)return e;for(;n!==l;){var i;let t=u(e.parentByChildUuid,n),r=null===(i=u(e.childrenByParentUuid,t))||void 0===i?void 0:i.indexOf(n);e.selectedChildByUuid.set(t,r),n=t}return{...e,current_leaf_message_uuid:t}},d=e=>e.content?e:{...e,content:[{type:"text",text:e.text||"",citations:[]}]},v=e=>{var t,n,i;let r=new Map,a=new Map,o=new Map,s=new Map,u=new Map;if(0===e.chat_messages.length)return{messageByUuid:a,parentByChildUuid:o,childrenByParentUuid:s,selectedChildByUuid:u};let c=e.chat_messages.map(d);for(let e of c)r.set(e.index,e),a.set(e.uuid,e);for(let e of c){let t=e.parent_message_uuid;if(!t){let i=e.index-1;for(;!t&&i>=0;)t=null===(n=r.get(i))||void 0===n?void 0:n.uuid,i--}t=null!=t?t:l,o.set(e.uuid,t),s.set(t,(null!==(i=s.get(t))&&void 0!==i?i:[]).concat(e.uuid)),u.set(t,0)}if(!(null===(t=s.get(l))||void 0===t?void 0:t[0]))throw Error("No root message found");return{chat_messages:c,messageByUuid:a,parentByChildUuid:o,childrenByParentUuid:s,selectedChildByUuid:u}},_=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Set;for(let t of e.chat_messages)"assistant"===t.sender&&t.parent_message_uuid&&n.add(t.parent_message_uuid);let i=e.chat_messages.filter(e=>"assistant"===e.sender||n.has(e.uuid)||void 0===e.parent_message_uuid||t),r={...e,chat_messages:i},a={...r,...v(r)};return a.current_leaf_message_uuid||c(a),c(a,r.current_leaf_message_uuid)},g=e=>{let t=Array.from(e.messageByUuid.values()).map(e=>e.index);return 0===t.length?-1:Math.max(...t)},p=(e,t)=>{for(let i of(e.chat_messages=e.chat_messages.concat(t),t)){var n;if(!i.parent_message_uuid)throw Error("Parent UUID required");let t=i.parent_message_uuid;e.messageByUuid.set(i.uuid,i),e.parentByChildUuid.set(i.uuid,t);let r=null!==(n=e.childrenByParentUuid.get(t))&&void 0!==n?n:[];r.push(i.uuid),e.childrenByParentUuid.set(t,r),e.selectedChildByUuid.set(t,r.length-1)}return c(e,t[t.length-1].uuid)},m=(e,t)=>{let n=[],i=null!=t?t:l;for(;e.childrenByParentUuid.has(i);){let t=u(e.childrenByParentUuid,i);if(0===t.length)break;let r=u(e.selectedChildByUuid,i),a=u(e.messageByUuid,t[r]);n.push({...a,parent_message_uuid:i,nOptions:t.length,selectedOption:r}),i=a.uuid}return n};function f(e,t,n){var i;let r=u(e.parentByChildUuid,t.uuid),o=u(e.childrenByParentUuid,r),s=a()((null!==(i=t.selectedOption)&&void 0!==i?i:0)+n,0,o.length-1);e.selectedChildByUuid.set(r,s);let l=m(e,r);return c(e,l[l.length-1].uuid)}},21468:function(e,t,n){n.d(t,{YZ:function(){return v},z$:function(){return d}});var i=n(65490),r=n(44846),a=n(7653),o=n(89992),s=n(51571),l=n(88075),u=n(92973);let c={snippets_command_used:{version:1},file_upload_too_large:{version:1},sse_interrupted:{version:1},snippets_suggestion_selected:{version:1},payment_modal_open:{version:1},pro_waitlist_requested:{version:1},payment_state_poll_for_invoice:{version:1},payment_state_poll_for_payment:{version:1},payment_state_poll_for_capability:{version:1},payment_state_payment_requires_confirmation:{version:1},payment_state_payment_failed:{version:1},payment_state_success:{version:1},payment_state_timed_out:{version:1},"onboarding.phone_verification.start":{version:1},"onboarding.phone_verification.sent_code":{version:1},"onboarding.phone_verification.invalid_code":{version:1},"onboarding.phone_verification.verified_code":{version:1},"onboarding.age_verification.start":{version:1},"onboarding.age_verification.complete":{version:1},"onboarding.name_input.started":{version:1},"onboarding.name_input.finished":{version:1},"onboarding.acceptable_use.started":{version:1},"onboarding.acceptable_use.finished":{version:1},"onboarding.disclaimers.started":{version:1},"onboarding.disclaimers.finished":{version:1},"onboarding.completed":{version:1},"pro_subscription.upgraded_to_annual":{version:1},"chat.conversation.too_long_prompt:loaded":{version:1},"chat.conversation.too_long_prompt:accepted":{version:1},"chat.conversation.too_long_prompt:dismissed":{version:1},"chat.conversation.too_long_prompt_warning:loaded":{version:1},"chat.conversation.too_long_prompt_warning:accepted":{version:1},"chat.conversation.too_long_prompt_warning:dismissed":{version:1},"ts.eu_election_banner.shown":{version:1,data_team_tag:"ts"},"ts.banner.shown":{version:1,data_team_tag:"ts"},"billing.credit_card.submitted":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.contact_sales.completed":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.contact_sales.loaded":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.payment_info.loaded":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.payment_info.submitted":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.setup_billing.loaded":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.setup_billing.submitted":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.ts_questionnaire.loaded":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.ts_questionnaire.submitted":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.ts_questionnaire_manual.loaded":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.select_plan.loaded":{version:1,data_team_tag:"billing_funnel"},"billing.upgrade.select_plan.completed":{version:1,data_team_tag:"billing_funnel"},"console.feedback.opened":{version:1},"console.feedback.submitted":{version:1},"evals.revision.created":{version:1},"evals.show_prompt_preview.toggled":{version:1},"evals.show_golden_answers.toggled":{version:1},"evals.run_all.submitted":{version:1},"evals.run_all.stopped":{version:1},"evals.test_case.run.submitted":{version:1},"evals.test_case.run.completed":{version:1},"evals.test_case.run.failed":{version:1},"evals.test_case.create.submitted":{version:1},"evals.test_case.delete.submitted":{version:1},"evals.select_revision.clicked":{version:1},"evals.test_case.update_rating.submitted":{version:1},"evals.test_case.import.show_modal.clicked":{version:1},"evals.test_case.import.browse.clicked":{version:1},"evals.test_case.import.success":{version:1},"evals.comparison.add_button.clicked":{version:1},"evals.comparison.remove_button.clicked":{version:1},"evals.comparison.other_revision.selected":{version:1},"test_case_generator.generate.started":{version:1},"test_case_generator.edit_logic.clicked":{version:1},"metaprompter.modal.loaded":{version:2},"metaprompter.example.selected":{version:1},"metaprompter.generate.started":{version:1},"metaprompter.generate.stop.attempted":{version:1},"metaprompter.generate.finished":{version:1},"metaprompter.start_editing.clicked":{version:1},"onboarding.invite_accept_page.invite_accept.submitted":{version:1,data_team_tag:"onboarding_funnel"},"onboarding.invite_accept_page.invite_reject.submitted":{version:1,data_team_tag:"onboarding_funnel"},"onboarding.invite_accept_page.loaded":{version:1,data_team_tag:"onboarding_funnel"},"onboarding.organization_create.loaded":{version:1,data_team_tag:"onboarding_funnel"},"onboarding.organization_create.submitted":{version:1,data_team_tag:"onboarding_funnel"},"workbench.completion.started":{version:2},"workbench.completion.finished":{version:2},"workbench.completion_stream.started":{version:1},"workbench.completion_stream.finished":{version:1},"workbench.tab_selection.clicked":{version:1},"workbench.variables_pane.loaded":{version:1},"workbench.examples.pane.loaded":{version:1},"workbench.examples.example.added":{version:2},"workbench.examples.example.deleted":{version:1},"workbench.examples.converted_to_raw_text":{version:1},"workbench.code_modal.opened":{version:1},"workbench.code_modal.code_copied":{version:1},"claudeai.projects.list_view.switched":{version:1},"claudeai.conversation.suggestion.applied":{version:1},"claudeai.conversation.recent.opened":{version:1},"claudeai.projects.activity.shared_conversation.opened":{version:1},"claudeai.conversation.artifact.vscode_exported":{version:1},"claudeai.settings.preview_feature.toggled":{version:1},"claudeai.settings.preview_feature.opened":{version:1},"claudeai.support.opened":{version:1},"claudeai.get_help.clicked":{version:1},"claudeai.conversation.feedback.sent":{version:1},"ccos.chatsuggestion.clicked":{version:1},"ccos.chatsuggestions.loaded":{version:1},"ccos.chatsuggestions.feedback":{version:1},"styles.selector.clicked":{version:1},"styles.modal":{version:1},"styles.nux.create_clicked":{version:1},"styles.custom.create_clicked":{version:1},"styles.custom.describe_clicked":{version:1},"styles.custom.describe_selected":{version:1},"styles.selected":{version:1},"artifact.feedback.sentiment":{version:1},"artifact.feedback.note":{version:1},"mcp.servers.listed":{version:1},"mcp.servers.connected":{version:1},"mcp.resources.listed":{version:1},"mcp.resources.read":{version:1},"mcp.prompts.listed":{version:1},"mcp.prompts.used":{version:1},"mcp.tools.listed":{version:1},"mcp.tools.called":{version:1},"mcp.sampling.requested":{version:1},"harmony.file.saved":{version:1},"harmony.suggestion.accepted":{version:1},"harmony.suggestion.rejected":{version:1},"hfi.comparative_model.selected":{version:1},"hfi.comparative_model.selection_cleared":{version:1},"hfi.comparative_model.streaming.started":{version:1},"hfi.comparative_model.streaming.finished":{version:1},"hfi.comparative_model.feedback_bar.switch_response.clicked":{version:1},"hfi.comparative_model.feedback_bar.prefer_response.clicked":{version:1},"apps.download_button_clicked":{version:1},"apps.nudge_banner_shown":{version:1},"apps.nudge_banner_clicked":{version:1},"apps.harmony_directory_synced":{version:1},"console.onboarding.name_and_legal.loaded":{version:1,data_team_tag:"onboarding_funnel"},"console.onboarding.name_and_legal.submitted":{version:1,data_team_tag:"onboarding_funnel"},"tengu.waitlist.update":{version:1}},d=()=>{let e=(0,u.K)(),{value:t}=(0,r.F)("log_segment_events"),{account:n,activeOrganization:i,isLoading:o}=(0,l.t)(),d=(0,s.Z)(),v=(0,a.useCallback)(r=>{if(o)return;let{event_key:a,...s}=r,l={account_uuid:null==n?void 0:n.uuid,organization_uuid:null==i?void 0:i.uuid,billing_type:null==i?void 0:i.billing_type,surface:d?"claude-ai":"console",...c[a],...s};return t&&console.log("[Segment Event] ".concat(a),l),e.track(a,l)},[e,n,i,d,o,t]);return(0,a.useMemo)(()=>({track:v}),[v])},v=(e,t,n,r)=>{let a=d(),{onSuccess:s,onError:l,...u}=r||{};return(0,o.uC)(t,n,{onSuccess(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];a.track({event_key:e,result:"success"}),null==s||s(...n)},onError(t){let n;for(var r=arguments.length,o=Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];t instanceof i.Hx&&(n=t.type),a.track({event_key:e,result:"failure",failure_reason:n}),null==l||l(t,...o)},...u})}},69850:function(e,t,n){var i,r;n.d(t,{DF:function(){return o},iw:function(){return a}}),(r=i||(i={})).GoogleTagManager="google_tag_manager",r.GoogleEnhancedConversions="google_enhanced_conversions";let a={analytics:!1,marketing:!1},o={analytics:!0,marketing:!0}},17299:function(e,t,n){n.d(t,{I:function(){return s},T:function(){return o}});var i=n(27573),r=n(7653);let a=(0,r.createContext)(null),o=()=>{let e=(0,r.useContext)(a);return void 0===e?null:e},s=e=>{let{children:t,settings:n}=e;return(0,i.jsx)(a.Provider,{value:n,children:t})}},92973:function(e,t,n){n.d(t,{K:function(){return o}});var i=n(51571),r=n(44846),a=n(30298);let o=()=>{let{segmentKey:e,segmentCdnHost:t,segmentApiHost:n}=(0,i.m)(),{value:o}=(0,r.F)("requires_explicit_consent");return a.u.loadIfNecessary({segmentKey:e,segmentCdnHost:t,segmentApiHost:n,requiresExplicitConsent:o})}},30298:function(e,t,n){n.d(t,{u:function(){return _}});var i=n(69850),r=n(10398),a=n(71854),o=n(21572),s=n(66837),l=n(13623),u=n(90345),c=n.n(u);class d{constructor(){this.name="RemoveUserAgent",this.version="1.0.0",this.type="before",this.isLoaded=()=>!0,this.load=()=>Promise.resolve(),this.redactPiiFromContext=e=>{var t;return(null==e?void 0:null===(t=e.event)||void 0===t?void 0:t.context)&&(delete e.event.context.userAgent,delete e.event.context.email,e.event.context.ip="REDACTED"),e},this.track=this.redactPiiFromContext,this.identify=this.redactPiiFromContext,this.page=this.redactPiiFromContext,this.group=this.redactPiiFromContext,this.alias=this.redactPiiFromContext,this.screen=this.redactPiiFromContext}}class v{constructor(){this.consentChangedCallback=c(),this.preferences=v.mapConsentPreferences(i.iw),this.analyticsBrowser=null,this.loadIfNecessary=e=>{let{segmentKey:t,segmentCdnHost:n,segmentApiHost:i,requiresExplicitConsent:r}=e;return this.analyticsBrowser||(this.analyticsBrowser=new s.b,this.loadInitialConsentPreferences(r),this.wrapAnalyticsWithConsent(this.analyticsBrowser).load({writeKey:t,cdnURL:"https://".concat(n),plugins:[new d]},{disableClientPersistence:!0,integrations:{"Segment.io":{apiHost:"".concat(i,"/v1"),protocol:"https"}}}).catch(e=>{(0,l.Tb)(e,{extra:{message:"Failed to load analytics"}})})),this.analyticsBrowser},this.registerOnConsentChanged=e=>{this.consentChangedCallback=e},this.getCategories=()=>this.preferences,this.loadInitialConsentPreferences=e=>{let t;try{t=r.U.get(a.cn.CONSENT_PREFERENCES)}catch(e){(0,l.Tb)(e,{extra:{message:"Failed to get consent preferences cookie"}})}if(t)try{let e=JSON.parse(t);this.preferences=v.mapConsentPreferences(e)}catch(e){console.warn("Malformed consent preferences cookie",t)}else e||(this.preferences=v.mapConsentPreferences(i.DF))},this.updateCategories=e=>{this.preferences=v.mapConsentPreferences(e),this.consentChangedCallback(this.preferences)},this.wrapAnalyticsWithConsent=e=>(0,o.K)({registerOnConsentChanged:this.registerOnConsentChanged,getCategories:this.getCategories})(e)}}v.mapConsentPreferences=e=>({marketing:e.marketing,analytics:e.analytics,necessary:!0});let _=new v},92068:function(e,t,n){n.d(t,{K:function(){return i}});let i=e=>{let t="";if(e.content)for(let n of e.content)"text"===n.type&&(t+=n.text);return t}},47859:function(e,t,n){n.d(t,{B:function(){return r}});var i=n(7653);function r(e){let t=JSON.stringify(e);return(0,i.useMemo)(()=>e,[t])}},71994:function(e,t,n){n.d(t,{H:function(){return i}});let i=()=>void 0===crypto.randomUUID?"".concat(1e7,"-",1e3,"-",4e3,"-",8e3,"-",1e11).replace(/[018]/g,e=>{let t=parseInt(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):crypto.randomUUID()}}]);