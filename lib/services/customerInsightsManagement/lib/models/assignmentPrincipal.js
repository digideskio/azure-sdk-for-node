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
 * The AssignmentPrincipal
 *
 */
class AssignmentPrincipal {
  /**
   * Create a AssignmentPrincipal.
   * @member {string} principalId The principal id being assigned to.
   * @member {string} principalType The Type of the principal ID.
   * @member {object} [principalMetadata] Other metadata for the principal.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AssignmentPrincipal
   *
   * @returns {object} metadata of AssignmentPrincipal
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AssignmentPrincipal',
      type: {
        name: 'Composite',
        className: 'AssignmentPrincipal',
        modelProperties: {
          principalId: {
            required: true,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          principalType: {
            required: true,
            serializedName: 'principalType',
            type: {
              name: 'String'
            }
          },
          principalMetadata: {
            required: false,
            serializedName: 'principalMetadata',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AssignmentPrincipal;
