
// Modeling the property sets in the 3T SBOM design 
// based on json-schema found here: https://github.com/cdfoundation/sig-security-sbom/blob/master/modeling/generated_3T-SBOM-EMS.schema.json
//

import { MinItems, MustMatch, Required } from "./validation";

interface element {
    hashes : hash[];
    annotations : annotation[];
    sourceOfRelationships : sourceOfRelationship[];
    targetOfRelationships : targetOfRelationship[];
    materialOfActivities : materialOfActivity[];
    productOfActivities : productOfActivity[];
    resourceOfActivities : resourceOfActivity[];
}

declare enum populationMethod {
    populationMethod_declaration,
    populationMethod_automated,
    populationMethod_investigation,
    populationMethod_other  
}

interface document extends element {
    name : string & Required;
    identifier : string & Required;
    author : string; // identity
    specVersion : string & Required;
    created : datetime & Required;
    populationMethod : populationMethod & Required;
    artifacts : artifact[] & MinItems<1>;
    referencedArtifacts : referencedArtifact[];
    signature : signature;
    relationships : relationship[];
    activities : activity[];
}

declare enum signatureMethodType {
    signatureMethod_other
}

interface signature {
    values : Map<string, string>;
    method : signatureMethodType;
}

declare enum hashType {
    hashType_sha256,
    hashType_sha512,
    hashType_md5,
    hashType_other
}

interface hash {
    value : string;
    hashType : hashType;
}

// Artifact types
declare enum artifactType {
    artifactType_file,
    artifactType_library,
    artifactType_framework,
    artifactType_application,
    artifactType_operatingSystem,
    artifactType_hardwareDevice,
    artifactType_other 
}

interface abstractArtifact extends element {
    name : string & Required;
    identifier : string & Required;
    namespace : string & Required;
    supplier : string; // identity?
    version : string;
    artifactType : artifactType & Required;
}

interface artifact extends abstractArtifact {
    license : string;
    summary : string;
    description : string;
    files : file[];
}

interface referencedArtifact extends abstractArtifact {
    referencedDocument : document[]; // should be referenceDocuments?
    files : referencedFile[];
}

// Annotation types
declare enum annotationType {
    annotationType_other  
}

interface abstractAnnotation extends element {
    author : string; // identity?
    created : datetime;
    annotationType : annotationType;
}

interface annotation extends abstractAnnotation {
    expression : string & Required;
}

interface externalAnnotation extends abstractAnnotation {
    uri : string & Required;
}

// Relationship types
declare enum relationshipType {
    relationshipType_contains,
    relationshipType_containedBy,
    relationshipType_other
}

interface sourceOfRelationship {
    target : string & Required;
    relationshipType : relationshipType & Required;
    comment : string;
}

interface targetOfRelationship {
    source : string & Required;
    relationshipType : relationshipType & Required;
    comment : string;
}

interface relationship {
    source : element & Required;
    target : element & Required;
    relationShip : relationshipType & Required;
    comment : string;
}


// File types
declare enum fileType {
    fileType_source,
    fileType_binary,
    fileType_documentation,
    fileType_audio,
    fileType_video,
    fileType_image,
    fileType_other
}

interface abstractFile extends element {
    relativeFilePath : string & Required;
    fileType : fileType & Required;
    snippets : snippet[];
}

interface file extends abstractFile {
}

interface referencedFile extends abstractFile {   
}

// Snippet types
interface snippet extends element {
    byteRangeLowerBound : number & Required;
    byteRangeUpperBound : number & Required;
    lineRangeUpperBound : number & Required;
    lineRangeLowerBound : number & Required;
}

// other types
interface environment {
    values : Map<string, string>;
}

interface run {
    actor : string & Required;
    created : datetime & Required;
}

// Activity types
// Looks like modeling was unfinished here, some strange relationships
declare enum assessmentType {
    assessmentType_codeReview,
    assessmentType_vulnerabilityScan,
    assessmentType_other
}

declare enum creationType {
    creationType_commit,
    creationType_compile,
    creationType_build,
    creationType_other
}

// ?? Why is this not based on activity?
interface materialOfActivity {
    products : element[] & Required;
    resources : element[];
    command : string & Required;
    environment : environment[]; // ??? environment is already an kv array, is this supposed to be an array of those?
    runs : run[];

    // OneOf
    creationType : creationType;
    assessmentType : assessmentType;
}

interface productOfActivity {
    materials : element[] & Required;
    resources : element[];
    command : string & Required;
    environment : environment[]; // ??? environment is already an kv array, is this supposed to be an array of those?
    runs : run[];

    // OneOf
    creationType : creationType;
    assessmentType : assessmentType;
}

interface resourceOfActivity {
    materials : element[] & Required;
    products : element[];
    command : string & Required;
    environment : environment[]; // ??? environment is already an kv array, is this supposed to be an array of those?
    runs : run[];

    // OneOf
    creationType : creationType;
    assessmentType : assessmentType;
}

interface activity {
    materials : element[] & Required;
    products : element[];
    resources : element[];
    command : string & Required;
    environment : environment[]; // ??? environment is already an kv array, is this supposed to be an array of those?
    runs : run[];
}

interface assessment extends activity {
    assessmentType : assessmentType & Required;
}

interface creation extends activity {
    creationType : creationType & Required;
}



