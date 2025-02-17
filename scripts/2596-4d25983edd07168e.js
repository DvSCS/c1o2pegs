"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2596],{57362:function(e,n,i){i.d(n,{Bo:function(){return P},Bt:function(){return h},KN:function(){return b},MH:function(){return D},Nt:function(){return x},QO:function(){return I},QU:function(){return g},Qw:function(){return S},RF:function(){return _},Ux:function(){return m},Xg:function(){return K},Y:function(){return C},bN:function(){return Q},fq:function(){return A},is:function(){return T},kK:function(){return U},kS:function(){return E},oy:function(){return z},pV:function(){return w},vF:function(){return M},w3:function(){return p},xt:function(){return L}});var t=i(89992),u=i(88075),a=i(24658),r=i(94673),l=i(65490),o=i(49793),c=i(73571),s=i(26821),d=i(7653),v=i(13415),y=i(5117),f=i(39617);function m(e){let{onError:n}=e,{activeOrganization:i}=(0,u.t)(),{data:a,variables:r,...l}=(0,t.uC)("/api/billing/".concat(null==i?void 0:i.uuid,"/consumer_pricing"),"POST",{enabled:!!i,meta:{noToast:!0},onError:n}),[o,c]=(0,d.useState)(),[s,v]=(0,d.useState)();return(0,d.useEffect)(()=>{a&&(c(a),v(r))},[a,r]),{data:o,variables:s,...l}}function g(e){let{onError:n}=e,{activeOrganization:i}=(0,u.t)(),{data:a,variables:r,...l}=(0,t.uC)("/api/billing/".concat(null==i?void 0:i.uuid,"/cw_pricing"),"POST",{enabled:!!i,meta:{noToast:!0},onError:n}),[o,c]=(0,d.useState)(),[s,v]=(0,d.useState)();return(0,d.useEffect)(()=>{a&&(c(a),v(r))},[a,r]),{data:o,variables:s,...l}}let p=()=>{let{activeOrganization:e}=(0,u.t)();return(0,t.WE)("/api/billing/".concat(null==e?void 0:e.uuid,"/reset_pricing"),{enabled:!!e,meta:{noToast:!0}})},b=()=>{let{activeOrganization:e}=(0,u.t)();return(0,t.uC)("/api/organizations/".concat(null==e?void 0:e.uuid,"/subscription"),"PUT",{enabled:!!e})},Q=()=>{let{activeOrganization:e}=(0,u.t)();return(0,t.uC)("/api/organizations/".concat(null==e?void 0:e.uuid,"/subscription/cw"),"PUT",{enabled:!!e})},_=()=>{let{activeOrganization:e}=(0,u.t)();return(0,t.uC)("/api/organizations/".concat(null==e?void 0:e.uuid,"/rate_limit_reset"),"POST",{enabled:!!e})};function K(){let{activeOrganization:e}=(0,u.t)();return(0,t.WE)("/api/organizations/".concat(null==e?void 0:e.uuid,"/subscription_details"),{queryKey:[o.QU,null==e?void 0:e.uuid],staleTime:0,enabled:!!e,meta:{noToast:e=>e instanceof l.Hx&&404===e.statusCode}})}let h=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{addError:t}=(0,a.e)(),u=(0,s.useQueryClient)(),r=(0,v.Iw)(e,{...i,async onSuccess(a,l,c){var s;if("payment_intent_client_secret"in a){let e=await n;if(!e){t("Stripe failed to initialize. Please try again.");return}if((await e.confirmPayment({clientSecret:a.payment_intent_client_secret,redirect:"if_required"})).error){t("Payment confirmation failed. Please try again.");return}r.mutate(l);return}u.invalidateQueries({queryKey:[o.je,e]}),u.invalidateQueries({queryKey:[o.sM,e]}),await (null===(s=i.onSuccess)||void 0===s?void 0:s.call(i,a,l,c))}});return r},S=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{addError:t}=(0,a.e)(),u=(0,s.useQueryClient)(),r=(0,v.Qx)(e,{...i,async onSuccess(a,l,c){var s;if("payment_intent_client_secret"in a){let e=await n;if(!e){t("Stripe failed to initialize. Please try again.");return}if((await e.confirmPayment({clientSecret:a.payment_intent_client_secret,redirect:"if_required"})).error){t("Payment confirmation failed. Please try again.");return}r.mutate(l);return}u.invalidateQueries({queryKey:[o.je,e]}),u.invalidateQueries({queryKey:[o.sM,e]}),await (null===(s=i.onSuccess)||void 0===s?void 0:s.call(i,a,l,c))}});return r};function q(){let{activeOrganization:e}=(0,u.t)(),n=(0,u.Cf)();return(0,t.WE)("/api/organizations/".concat(null==e?void 0:e.uuid,"/subscription_status"),{queryKey:[o.sM,null==e?void 0:e.uuid],staleTime:0,enabled:!!e&&n,meta:{noToast:e=>e instanceof l.Hx&&404===e.statusCode}})}function w(){let{data:e,isLoading:n}=q();return{isRavenCanceled:(null==e?void 0:e.status)==="canceled"||(null==e?void 0:e.status)==="unpaid",isLoading:n}}function T(){let{data:e,isLoading:n}=q();return{isRavenPastDue:(null==e?void 0:e.status)==="past_due",isLoading:n}}function C(){let{data:e,isLoading:n}=q();return{isRavenPendingCancellation:!!(null==e?void 0:e.cancel_at_ts),isLoading:n}}function U(){let{activeOrganization:e}=(0,u.t)(),{isRavenCanceled:n,isLoading:i}=w(),{isRavenPastDue:t,isLoading:a}=T(),r=i||a,l=(null==e?void 0:e.billing_type)==="stripe_subscription_contracted";return{isLoading:r,canManageMembers:!r&&!n&&(l||!t)}}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:n}=(0,u.t)(),i=(0,s.useQueryClient)(),a=null==n?void 0:n.uuid;return(0,t.uC)("/api/organizations/".concat(a,"/end_subscription"),"PUT",{...e,onSuccess(n,t,u){var r;i.setQueryData([o.QU,a],e=>{if(e)return{...e,plan_ending_before:"".concat(n.plan_ends_at,"T00:00:00+00:00")}}),i.invalidateQueries({queryKey:[o.sM,a]}),i.invalidateQueries({queryKey:[o.je,a]}),null===(r=e.onSuccess)||void 0===r||r.call(e,n,t,u)},enabled:!!n})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:n}=(0,u.t)(),i=(0,s.useQueryClient)(),a=null==n?void 0:n.uuid;return(0,t.uC)("/api/organizations/".concat(a,"/resume_subscription"),"PUT",{...e,onSuccess(n,t,u){var r;i.setQueryData([o.QU,a],e=>{if(e)return{...e,plan_ending_before:null}}),i.invalidateQueries({queryKey:[o.sM,a]}),i.invalidateQueries({queryKey:[o.je,a]}),null===(r=e.onSuccess)||void 0===r||r.call(e,n,t,u)},enabled:!!n})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:n}=(0,u.t)(),i=(0,s.useQueryClient)();return(0,t.uC)("/api/organizations/".concat(null==n?void 0:n.uuid,"/renew_subscription/cw"),"PUT",{...e,onSuccess(t,u,a){var r;i.invalidateQueries({queryKey:[o.QU,null==n?void 0:n.uuid]}),i.invalidateQueries({queryKey:[o.sM,null==n?void 0:n.uuid]}),i.invalidateQueries({queryKey:[o.RK,null==n?void 0:n.uuid]}),i.invalidateQueries({queryKey:[o.je,null==n?void 0:n.uuid]}),null===(r=e.onSuccess)||void 0===r||r.call(e,t,u,a)},enabled:!!n})}function D(e){let{limit:n,createdSince:i,organizationUUID:a,meta:r}=e,{activeOrganization:l}=(0,u.t)(),c=Math.round(i.toSeconds()),s=a||(null==l?void 0:l.uuid);return(0,t.WE)("/api/stripe/".concat(s,"/invoices?limit=").concat(n,"&created_since_ts=").concat(c),{queryKey:[o.RK,s,{limit:n,created_since_ts:c}],staleTime:0,enabled:!!s,meta:r})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:n}=(0,u.t)(),i=(0,u.Cf)();return(0,t.WE)("/api/stripe/".concat(null==n?void 0:n.uuid,"/upcoming_invoice"),{queryKey:[o.je,null==n?void 0:n.uuid],staleTime:0,enabled:!!n&&i,meta:{noToast:e=>e instanceof l.Hx&&500===e.statusCode},...e})}function E(){let{activeOrganization:e}=(0,u.t)(),n=(0,s.useQueryClient)(),i=null==e?void 0:e.uuid;return(0,t.uC)("/api/organizations/".concat(i,"/payment_method/update_latest"),"POST",{onSuccess:async e=>{let t=n.getQueryData([o.QU,i]);t&&e?n.setQueryData([o.QU,i],{...t,payment_method:{...e}}):await n.invalidateQueries({queryKey:[o.QU,i]}),n.invalidateQueries({queryKey:[o.sM,i]}),n.invalidateQueries({queryKey:[o.RK,i]})},meta:{noToast:!0}})}function I(){let{data:e,isLoading:n}=(0,y.uy)(),{data:i,isLoading:t}=(0,v.cK)(),a=(0,r.N)(c.YB.MembersManage),{data:l}=(0,f.aJ)(),o=(0,u.gQ)(),s=n||t||!e||!i||!l;if(s)return{isLoading:s,hasManageMembersPermission:a,membersWithMinApplied:!1,activeMembers:0,invitedMembers:0,unclaimedMembers:0,minimumApplied:!1,memberLimit:0,isUnlimited:!1};let d=e.length,m=i.filter(e=>"pending"===e.status).length,g=d+m,p=o?l.members_limit-g:Math.max(5-g,0);return{isLoading:s,hasManageMembersPermission:a,totalMembersWithoutMinimumApplied:g,totalMembersWithMinimumApplied:Math.max(d+m,5),activeMembers:d,invitedMembers:m,unclaimedMembers:p,minimumApplied:g<5,memberLimit:l.members_limit,isUnlimited:l.unlimited_members||!1}}function A(){var e;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:i}=(0,u.t)(),a="/api/organizations/".concat(null!==(e=null==i?void 0:i.uuid)&&void 0!==e?e:"","/profile"),r=(0,s.useQueryClient)();return(0,t.uC)(a,"PUT",{...n,async onSuccess(){for(var e,i=arguments.length,t=Array(i),u=0;u<i;u++)t[u]=arguments[u];await r.invalidateQueries({queryKey:[o.eo]}),await (null===(e=n.onSuccess)||void 0===e?void 0:e.call(n,...t))}})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:n}=(0,u.t)(),i=(0,s.useQueryClient)(),a=null==n?void 0:n.uuid;return(0,t.uC)("/api/organizations/".concat(a,"/pro/upgrade_to_yearly"),"PUT",{...e,onSuccess(n,t,u){var r;i.invalidateQueries({queryKey:[o.QU,a]}),i.invalidateQueries({queryKey:[o.sM,a]}),i.invalidateQueries({queryKey:[o.je,a]}),i.invalidateQueries({queryKey:[o.RK,a]}),null===(r=e.onSuccess)||void 0===r||r.call(e,n,t,u)},enabled:!!n})}},13415:function(e,n,i){i.d(n,{DT:function(){return v},Iw:function(){return s},Qx:function(){return d},cK:function(){return c},wA:function(){return y}});var t=i(89992),u=i(88075),a=i(24658),r=i(65490),l=i(49793),o=i(26821);let c=()=>{var e;let{activeOrganization:n}=(0,u.t)();return(0,t.WE)("/api/organizations/".concat(null!==(e=null==n?void 0:n.uuid)&&void 0!==e?e:"","/invites"),{enabled:!!(null==n?void 0:n.uuid)&&(n.capabilities.includes("api")||n.capabilities.includes("raven")),queryKey:[l.BB,{orgUUID:null==n?void 0:n.uuid}],staleTime:0})},s=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,o.useQueryClient)();return(0,t.uC)("/api/organizations/".concat(e,"/invites"),"POST",{...n,async onSuccess(){for(var t,u=arguments.length,a=Array(u),r=0;r<u;r++)a[r]=arguments[r];await i.invalidateQueries({queryKey:[l.BB,{orgUUID:e}]}),i.invalidateQueries({queryKey:[l.je,e]}),i.invalidateQueries({queryKey:[l.sM,e]}),await (null===(t=n.onSuccess)||void 0===t?void 0:t.call(n,...a))}})},d=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,o.useQueryClient)();return(0,t.uC)("/api/organizations/".concat(e,"/invites/bulk"),"POST",{...n,async onSuccess(){for(var t,u=arguments.length,a=Array(u),r=0;r<u;r++)a[r]=arguments[r];await i.invalidateQueries({queryKey:[l.BB,{orgUUID:e}]}),i.invalidateQueries({queryKey:[l.je,e]}),i.invalidateQueries({queryKey:[l.sM,e]}),await (null===(t=n.onSuccess)||void 0===t?void 0:t.call(n,...a))}})},v=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=(0,o.useQueryClient)(),{addError:c}=(0,a.e)();return(0,t.uC)("/api/organizations/".concat(e,"/invites/").concat(n),"DELETE",{...i,meta:{noToast:!0},async onSuccess(){for(var n,t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];await u.invalidateQueries({queryKey:[l.BB,{orgUUID:e}]}),u.invalidateQueries({queryKey:[l.je,e]}),u.invalidateQueries({queryKey:[l.sM,e]}),await (null===(n=i.onSuccess)||void 0===n?void 0:n.call(i,...a))},onError(e){var n,i;e instanceof r.Hx&&(null===(i=e.extra)||void 0===i?void 0:null===(n=i.details)||void 0===n?void 0:n.type)==="seat_minimum_reached"?c("You cannot go below 5 members."):c("There was an error revoking the invite.")}})},y=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=(0,o.useQueryClient)();return(0,t.uC)("/api/organizations/".concat(e,"/invites/").concat(n),"PUT",{...i,async onSuccess(){for(var n,t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];await u.invalidateQueries({queryKey:[l.BB,{orgUUID:e}]}),await (null===(n=i.onSuccess)||void 0===n?void 0:n.call(i,...a))}})}},5117:function(e,n,i){i.d(n,{er:function(){return d},gK:function(){return s},uy:function(){return c}});var t=i(89992),u=i(88075),a=i(24658),r=i(65490),l=i(49793),o=i(26821);let c=()=>{var e;let{activeOrganization:n}=(0,u.t)();return(0,t.WE)("/api/organizations/".concat(null!==(e=null==n?void 0:n.uuid)&&void 0!==e?e:"","/members"),{enabled:!!(null==n?void 0:n.uuid)&&(n.capabilities.includes("api")||n.capabilities.includes("raven")),queryKey:[l.I_,{orgUUID:null==n?void 0:n.uuid}],staleTime:0})},s=function(e){var n;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{activeOrganization:a}=(0,u.t)(),r=(0,o.useQueryClient)();return(0,t.uC)("/api/organizations/".concat(null!==(n=null==a?void 0:a.uuid)&&void 0!==n?n:"","/members/").concat(e),"PUT",{...i,meta:{errorMessage:"There was an error updating the user’s role."},async onSuccess(){for(var e,n=arguments.length,t=Array(n),u=0;u<n;u++)t[u]=arguments[u];await Promise.all([r.invalidateQueries({queryKey:[l.I_,{orgUUID:null==a?void 0:a.uuid}]}),r.invalidateQueries({queryKey:[l.BB,{orgUUID:null==a?void 0:a.uuid}]})]),await (null===(e=i.onSuccess)||void 0===e?void 0:e.call(i,...t))}})},d=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=(0,o.useQueryClient)(),{addError:c}=(0,a.e)(),s="uuid"in n?n.uuid:n.account.uuid,d="email_address"in n?n.email_address:n.account.email_address;return(0,t.uC)("/api/organizations/".concat(e,"/members/").concat(s),"DELETE",{...i,meta:{noToast:!0},async onSuccess(){for(var n,t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];await u.invalidateQueries({queryKey:[l.I_,{orgUUID:e}]}),u.invalidateQueries({queryKey:[l.je,e]}),u.invalidateQueries({queryKey:[l.sM,e]}),await (null===(n=i.onSuccess)||void 0===n?void 0:n.call(i,...a))},onError(e){var n,i;e instanceof r.Hx&&(null===(i=e.extra)||void 0===i?void 0:null===(n=i.details)||void 0===n?void 0:n.type)==="seat_minimum_reached"?c("You cannot go below 5 members."):c("There was an error removing ".concat(d," from the organization."))}})}},39617:function(e,n,i){i.d(n,{$f:function(){return f},$r:function(){return l},CQ:function(){return o},KJ:function(){return d},Kg:function(){return v},aJ:function(){return c},hb:function(){return y},vA:function(){return s}});var t=i(89992),u=i(88075),a=i(49793),r=i(26821);let l=e=>(0,t.WE)("/api/organizations/".concat(e),{queryKey:[a.mm,e],enabled:!!e,staleTime:3e4}),o=()=>{let{activeOrganization:e}=(0,u.t)(),n=null==e?void 0:e.uuid;return(0,t.Ne)(e=>{let{flagType:i}=e;return"/api/organizations/".concat(n,"/flags/").concat(i,"/dismiss")},"POST",(e,n)=>{let{flagType:i}=e;if(n)return{...n,active_flags:n.active_flags.filter(e=>e.type!==i)}},{queryKey:[a.mm,n]})},c=()=>{let{activeOrganization:e}=(0,u.t)(),n=null==e?void 0:e.uuid;return(0,t.WE)("/api/organizations/".concat(n,"/members_limit"),{queryKey:[a.UD,n],enabled:!!n,staleTime:0})},s=()=>{let{activeOrganization:e}=(0,u.t)(),n=null==e?void 0:e.uuid,i=(0,r.useQueryClient)();return(0,t.uC)("/api/organizations/".concat(n,"/contracted_quantity"),"PUT",{enabled:!!n,onSuccess:async()=>{await i.invalidateQueries({queryKey:[a.UD,n]})}})},d=()=>{let{activeOrganization:e}=(0,u.t)(),n=null==e?void 0:e.uuid;return(0,t.WE)("/api/organizations/".concat(n,"/public_projects_enabled"),{queryKey:[a.eu,n],enabled:!!n,staleTime:0})},v=()=>{let{activeOrganization:e}=(0,u.t)(),n=null==e?void 0:e.uuid;return(0,t.WE)("/api/organizations/".concat(n,"/feature_settings"),{queryKey:[a.XC,n],enabled:!!n,staleTime:0})},y=()=>{var e,n;let{activeOrganization:i}=(0,u.t)(),{data:t}=l(null==i?void 0:i.uuid);return null===(n=null==t?void 0:null===(e=t.settings)||void 0===e?void 0:e.claude_ai_completion_feedback_enabled)||void 0===n||n};function f(){var e;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{activeOrganization:i}=(0,u.t)(),l="/api/organizations/".concat(null!==(e=null==i?void 0:i.uuid)&&void 0!==e?e:""),o=(0,r.useQueryClient)();return(0,t.uC)(l,"PUT",{enabled:!!i,...n,async onSuccess(){for(var e,i=arguments.length,t=Array(i),u=0;u<i;u++)t[u]=arguments[u];await Promise.all([o.invalidateQueries({queryKey:[a.aY]}),o.invalidateQueries({queryKey:[a.mm]})]),await (null===(e=n.onSuccess)||void 0===e?void 0:e.call(n,...t))}})}},57943:function(e,n,i){i.d(n,{S:function(){return o},x:function(){return s}});var t=i(37938),u=i(7653),a=i(89992),r=i(51571),l=i(88075);let o=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],{activeOrganization:n}=(0,l.t)(),{data:i,mutate:t,isIdle:r}=(0,a.uC)("/api/stripe/".concat(null==n?void 0:n.uuid,"/intent"),"POST",{enabled:!!n});return(0,u.useEffect)(()=>{r&&e&&t()},[t,r,e]),i},c=null,s=()=>{let{stripePublishableKey:e}=(0,r.m)();return c||(c=(0,t.J)(e)),c}},94673:function(e,n,i){i.d(n,{N:function(){return r}});var t=i(73571),u=i(7653),a=i(88075);function r(e){let{account:n,activeOrganization:i}=(0,a.t)();return(0,u.useMemo)(()=>(0,t.Di)(n,i,e),[n,i,e])}},68159:function(e,n,i){i.d(n,{J:function(){return u}});var t=i(7653);let u=(e,n,i,u)=>(0,t.useMemo)(()=>{{let e=getComputedStyle(document.body);return"hsl(".concat(e.getPropertyValue("--".concat(u)),")")}},[i,u,n,e])},43631:function(e,n,i){i.d(n,{HY:function(){return r},mz:function(){return u},xG:function(){return t}});let t=function(e,n){let{preferWholeNumber:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e=Math.round(e);let t={minimumFractionDigits:2,maximumFractionDigits:2};i&&e/100%1==0&&(t.minimumFractionDigits=0,t.maximumFractionDigits=0);let u=navigator.languages&&navigator.languages.length?navigator.languages:navigator.language?navigator.language:"en-US",a="string"==typeof u?u:u[0];return(["SGD","AUD","NZD"].includes(n)||"USD"===n&&"en-US"!==a)&&(t.currencyDisplay="code"),new Intl.NumberFormat(u||void 0,{style:"currency",currency:n,...t}).format(e/100)};function u(e){let{amount:n,currency:i,preferWholeNumber:u}=e;return t(n,i,{preferWholeNumber:u})}let a={aud:{showIncluded:!0,taxLabel:"GST"},brl:{showIncluded:!1,taxLabel:null},cad:{showIncluded:!1,taxLabel:null},eur:{showIncluded:!1,taxLabel:"VAT"},gbp:{showIncluded:!0,taxLabel:"VAT"},nzd:{showIncluded:!0,taxLabel:"VAT"},sgd:{showIncluded:!0,taxLabel:"GST"},usd:{showIncluded:!1,taxLabel:null}};function r(e){var n;return null!==(n=a[e.toLowerCase()])&&void 0!==n?n:a.usd}}}]);