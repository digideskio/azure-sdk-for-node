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
 * Output of the validate probe API.
 *
 */
class ValidateProbeOutput {
  /**
   * Create a ValidateProbeOutput.
   * @member {boolean} [isValid] Indicates whether the probe URL is accepted or
   * not.
   * @member {string} [errorCode] Specifies the error code when the probe url
   * is not accepted.
   * @member {string} [message] The detailed error message describing why the
   * probe URL is not accepted.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ValidateProbeOutput
   *
   * @returns {object} metadata of ValidateProbeOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValidateProbeOutput',
      type: {
        name: 'Composite',
        className: 'ValidateProbeOutput',
        modelProperties: {
          isValid: {
            required: false,
            readOnly: true,
            serializedName: 'isValid',
            type: {
              name: 'Boolean'
            }
          },
          errorCode: {
            required: false,
            readOnly: true,
            serializedName: 'errorCode',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ValidateProbeOutput;
