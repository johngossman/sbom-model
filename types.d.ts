/*
 * A constraint is a declarative type used in intersection types to specify a runtime
 * validation: spec how an item will be validated
 * defaulting: spec how an item will be defaulted
 * conversion: spec how an item will be converted
 * behavior: *other behavior*
 *
 * a constraint can be applied on a property or a type
 * note: adl.types defines the constraints without implementation
 * 			 adl.runtime implement them
*/
// all constraint are identified by this interface
export interface ConstraintInterface{}
// constraints that apply on property must implement this interface
export interface PropertyConstraint extends ConstraintInterface{}

// constraints that apply on types must implement this interface
export interface TypeConstraint extends ConstraintInterface{}