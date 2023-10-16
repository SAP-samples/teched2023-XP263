'use strict';

function Column(name, type, length, precision, scale, isPrimaryKey, isNullable, defaultValue, associationFullname, cardinality, joinCondition) {

    this._name = name;
    this._type = type || ''; // 'cds.Association' type columns should not be included into generated projectionView
    this._length = length;// STRING
    this._precision = precision;// DECIMAL FLOAT
    this._scale = scale;// DECIMAL
    this._isKey = isPrimaryKey || false;
    this._isNullable = isNullable || false;
    this._defaultValue = defaultValue;// TODO

    this._associationFullname = associationFullname;
    this._cardinality = cardinality;
    this._joinCondition = joinCondition;
}

module.exports = Column;
