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

const models = require('./index');

/**
 * An object that represents a machine learning workspace.
 *
 * @extends models['Resource']
 */
class Workspace extends models['Resource'] {
  /**
   * Create a Workspace.
   * @member {string} [workspaceId] The immutable id associated with this
   * workspace.
   * @member {string} [description] The description of this workspace.
   * @member {string} [friendlyName] The friendly name for this workspace. This
   * name in mutable
   * @member {date} [creationTime] The creation time of the machine learning
   * workspace in ISO8601 format.
   * @member {string} [keyVault] ARM id of the key vault associated with this
   * workspace. This cannot be changed once the workspace has been created
   * @member {string} [applicationInsights] ARM id of the application insights
   * associated with this workspace. This cannot be changed once the workspace
   * has been created
   * @member {string} [containerRegistry] ARM id of the container registry
   * associated with this workspace. This cannot be changed once the workspace
   * has been created
   * @member {string} [storageAccount] ARM id of the storage account associated
   * with this workspace. This cannot be changed once the workspace has been
   * created
   * @member {string} [discoveryUrl] Url for the discovery service to identify
   * regional endpoints for machine learning experimentation services
   * @member {string} [provisioningState] The current deployment state of
   * workspace resource. The provisioningState is to indicate states for
   * resource provisioning. Possible values include: 'Unknown', 'Updating',
   * 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Workspace
   *
   * @returns {object} metadata of Workspace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Workspace',
      type: {
        name: 'Composite',
        className: 'Workspace',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          identity: {
            required: false,
            readOnly: true,
            serializedName: 'identity',
            type: {
              name: 'Composite',
              className: 'Identity'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
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
          },
          workspaceId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.workspaceId',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'properties.friendlyName',
            type: {
              name: 'String'
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          keyVault: {
            required: false,
            serializedName: 'properties.keyVault',
            type: {
              name: 'String'
            }
          },
          applicationInsights: {
            required: false,
            serializedName: 'properties.applicationInsights',
            type: {
              name: 'String'
            }
          },
          containerRegistry: {
            required: false,
            serializedName: 'properties.containerRegistry',
            type: {
              name: 'String'
            }
          },
          storageAccount: {
            required: false,
            serializedName: 'properties.storageAccount',
            type: {
              name: 'String'
            }
          },
          discoveryUrl: {
            required: false,
            serializedName: 'properties.discoveryUrl',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Workspace;
