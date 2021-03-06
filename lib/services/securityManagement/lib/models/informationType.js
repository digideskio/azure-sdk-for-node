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
 * The information type.
 *
 */
class InformationType {
  /**
   * Create a InformationType.
   * @member {string} [displayName] The name of the information type.
   * @member {number} [order] The order of the information type.
   * @member {uuid} [recommendedLabelId] The recommended label id to be
   * associated with this information type.
   * @member {boolean} [enabled] Indicates whether the information type is
   * enabled or not.
   * @member {boolean} [custom] Indicates whether the information type is
   * custom or not.
   * @member {array} [keywords] The information type keywords.
   */
  constructor() {
  }

  /**
   * Defines the metadata of InformationType
   *
   * @returns {object} metadata of InformationType
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InformationType',
      type: {
        name: 'Composite',
        className: 'InformationType',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          order: {
            required: false,
            serializedName: 'order',
            type: {
              name: 'Number'
            }
          },
          recommendedLabelId: {
            required: false,
            serializedName: 'recommendedLabelId',
            type: {
              name: 'String'
            }
          },
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          custom: {
            required: false,
            serializedName: 'custom',
            type: {
              name: 'Boolean'
            }
          },
          keywords: {
            required: false,
            serializedName: 'keywords',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InformationProtectionKeywordElementType',
                  type: {
                    name: 'Composite',
                    className: 'InformationProtectionKeyword'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = InformationType;
