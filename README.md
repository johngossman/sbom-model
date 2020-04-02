
# sbom-model

Experiments in modeling software bill of materials spec

d.ts are typescript syntax files. The intention is to use this in the design process, not (necessarily) to actually generate models or code.

proto files are attempts to use protobuf instead of typescript to compare syntax

Both are experimental, but typescript is more complete and up to date. If there are questions about which is correct, assume typescript

# files to look at

base.d.ts is the base profile of SPDX 3.0 (draft) based on my read of an early spec
licensing.d.ts is the licencing profile of SPDX 3.0 based on another early spec
base.proto is base in protobuf format

3tsbom.d.ts is my attempt at the 3T SBOM spec based on reading this sample: <https://github.com/cdfoundation/sig-security-sbom/blob/master/illustration/redie/painless-config-install_sbom.json>

3tsbom-2.d.ts is based on this json-schema file from a later iteration: <https://github.com/cdfoundation/sig-security-sbom/blob/master/modeling/generated_3T-SBOM-EMS.schema.json>
