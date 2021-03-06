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
 * Terms of service contract properties.
 *
 */
class TermsOfServiceProperties {
  /**
   * Create a TermsOfServiceProperties.
   * @member {string} [text] A terms of service text.
   * @member {boolean} [enabled] Display terms of service during a sign-up
   * process.
   * @member {boolean} [consentRequired] Ask user for consent to the terms of
   * service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TermsOfServiceProperties
   *
   * @returns {object} metadata of TermsOfServiceProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TermsOfServiceProperties',
      type: {
        name: 'Composite',
        className: 'TermsOfServiceProperties',
        modelProperties: {
          text: {
            required: false,
            serializedName: 'text',
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
          consentRequired: {
            required: false,
            serializedName: 'consentRequired',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = TermsOfServiceProperties;
