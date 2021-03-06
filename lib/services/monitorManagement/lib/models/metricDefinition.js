/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Metric definition class specifies the metadata for a metric.
 *
 */
class MetricDefinition {
  /**
   * Create a MetricDefinition.
   * @member {boolean} [isDimensionRequired] Flag to indicate whether the
   * dimension is required.
   * @member {string} [resourceId] the resource identifier of the resource that
   * emitted the metric.
   * @member {string} [namespace] the namespace the metric blongs to.
   * @member {object} [name] the name and the display name of the metric, i.e.
   * it is a localizable string.
   * @member {string} [name.value] the invariant value.
   * @member {string} [name.localizedValue] the locale specific value.
   * @member {string} [unit] the unit of the metric. Possible values include:
   * 'Count', 'Bytes', 'Seconds', 'CountPerSecond', 'BytesPerSecond',
   * 'Percent', 'MilliSeconds', 'ByteSeconds', 'Unspecified'
   * @member {string} [primaryAggregationType] the primary aggregation type
   * value defining how to use the values for display. Possible values include:
   * 'None', 'Average', 'Count', 'Minimum', 'Maximum', 'Total'
   * @member {array} [supportedAggregationTypes] the collection of what
   * aggregation types are supported.
   * @member {array} [metricAvailabilities] the collection of what aggregation
   * intervals are available to be queried.
   * @member {string} [id] the resource identifier of the metric definition.
   * @member {array} [dimensions] the name and the display name of the
   * dimension, i.e. it is a localizable string.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricDefinition
   *
   * @returns {object} metadata of MetricDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricDefinition',
      type: {
        name: 'Composite',
        className: 'MetricDefinition',
        modelProperties: {
          isDimensionRequired: {
            required: false,
            serializedName: 'isDimensionRequired',
            type: {
              name: 'Boolean'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          namespace: {
            required: false,
            serializedName: 'namespace',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          unit: {
            required: false,
            serializedName: 'unit',
            type: {
              name: 'Enum',
              allowedValues: [ 'Count', 'Bytes', 'Seconds', 'CountPerSecond', 'BytesPerSecond', 'Percent', 'MilliSeconds', 'ByteSeconds', 'Unspecified' ]
            }
          },
          primaryAggregationType: {
            required: false,
            serializedName: 'primaryAggregationType',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'Average', 'Count', 'Minimum', 'Maximum', 'Total' ]
            }
          },
          supportedAggregationTypes: {
            required: false,
            serializedName: 'supportedAggregationTypes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AggregationTypeElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'None', 'Average', 'Count', 'Minimum', 'Maximum', 'Total' ]
                  }
              }
            }
          },
          metricAvailabilities: {
            required: false,
            serializedName: 'metricAvailabilities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetricAvailabilityElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetricAvailability'
                  }
              }
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          dimensions: {
            required: false,
            serializedName: 'dimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LocalizableStringElementType',
                  type: {
                    name: 'Composite',
                    className: 'LocalizableString'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MetricDefinition;
