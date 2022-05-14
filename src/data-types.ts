import * as DataTypes from './dialects/abstract/data-types.js';
import { classToInvokable } from './utils/class-to-invokable.js';

export const ABSTRACT = DataTypes.AbstractDataType;
export const STRING = classToInvokable(DataTypes.STRING);
export const CHAR = classToInvokable(DataTypes.CHAR);
export const TEXT = classToInvokable(DataTypes.TEXT);
export const TINYINT = classToInvokable(DataTypes.TINYINT);
export const SMALLINT = classToInvokable(DataTypes.SMALLINT);
export const MEDIUMINT = classToInvokable(DataTypes.MEDIUMINT);
export const INTEGER = classToInvokable(DataTypes.INTEGER);
export const BIGINT = classToInvokable(DataTypes.BIGINT);
export const FLOAT = classToInvokable(DataTypes.FLOAT);
export const TIME = classToInvokable(DataTypes.TIME);
export const DATE = classToInvokable(DataTypes.DATE);
export const DATEONLY = classToInvokable(DataTypes.DATEONLY);
export const BOOLEAN = classToInvokable(DataTypes.BOOLEAN);
export const NOW = classToInvokable(DataTypes.NOW);
export const BLOB = classToInvokable(DataTypes.BLOB);
export const DECIMAL = classToInvokable(DataTypes.DECIMAL);
export const UUID = classToInvokable(DataTypes.UUID);
export const UUIDV1 = classToInvokable(DataTypes.UUIDV1);
export const UUIDV4 = classToInvokable(DataTypes.UUIDV4);
export const HSTORE = classToInvokable(DataTypes.HSTORE);
export const JSON = classToInvokable(DataTypes.JSON);
export const JSONB = classToInvokable(DataTypes.JSONB);
export const VIRTUAL = classToInvokable(DataTypes.VIRTUAL);
export const ARRAY = classToInvokable(DataTypes.ARRAY);
export const ENUM = classToInvokable(DataTypes.ENUM);
export const RANGE = classToInvokable(DataTypes.RANGE);
export const REAL = classToInvokable(DataTypes.REAL);
export const DOUBLE = classToInvokable(DataTypes.DOUBLE);
export const GEOMETRY = classToInvokable(DataTypes.GEOMETRY);
export const GEOGRAPHY = classToInvokable(DataTypes.GEOGRAPHY);
export const CIDR = classToInvokable(DataTypes.CIDR);
export const INET = classToInvokable(DataTypes.INET);
export const MACADDR = classToInvokable(DataTypes.MACADDR);
export const CITEXT = classToInvokable(DataTypes.CITEXT);
export const TSVECTOR = classToInvokable(DataTypes.TSVECTOR);
