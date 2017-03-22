define("pages/open-course/assessment/clients/naptimeAssessmentClient",["require","exports","module","q","underscore","js/lib/path","js/lib/stringKeyTuple"],function(require,exports,module){"use strict";var r=require("q"),_=require("underscore"),n=require("js/lib/path"),e=require("js/lib/stringKeyTuple"),a="actions",i="onDemandExamSessions.v1",s="onDemandExamSummaries.v1",t=function NaptimeAssessmentClient(t,e){this.itemMetadata=t,this.naptimeItemClient=e};t.prototype.callAction=function(t,s,r,o){var u=this.itemMetadata.get("course").get("id"),m=this.itemMetadata.getId(),d=e.tupleToStringKey([u,m,t]),l="?includes=gradingAttempts",g=n.join(i,d,a)+l;return this.naptimeItemClient.create(g,{name:s,argument:r||[],verifiableId:o}).then(function(t){var e=t.body.linked["gradingAttempts.v1"];return{result:t.body.elements[0].result,gradingAttempt:e&&e[0]}})},t.prototype.getOrCreateSession=function(){return this.naptimeItemClient.create(i,{courseId:this.itemMetadata.get("course").get("id"),itemId:this.itemMetadata.getId()}).then(function(t){var i=t.createdId;return e.stringKeyToTuple(i)[2]})},t.prototype.getEvaluations=function(){var t=this.itemMetadata.get("course").get("id"),i=this.itemMetadata.getId(),n=e.tupleToStringKey([t,i]);return this.naptimeItemClient.get(s,n).then(function(t){return t.elements[0]})},module.exports=t});