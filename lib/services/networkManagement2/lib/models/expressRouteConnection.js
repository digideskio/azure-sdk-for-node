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
 * ExpressRouteConnection resource.
 *
 * @extends models['SubResource']
 */
class ExpressRouteConnection extends models['SubResource'] {
  /**
   * Create a ExpressRouteConnection.
   * @member {string} [provisioningState] The provisioning state of the
   * resource. Possible values include: 'Succeeded', 'Updating', 'Deleting',
   * 'Failed'
   * @member {object} expressRouteCircuitPeering The ExpressRoute circuit
   * peering.
   * @member {string} [expressRouteCircuitPeering.id] The ID of the
   * ExpressRoute circuit peering.
   * @member {string} [authorizationKey] Authorization key to establish the
   * connection.
   * @member {number} [routingWeight] The routing weight associated to the
   * connection.
   * @member {string} name The name of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExpressRouteConnection
   *
   * @returns {object} metadata of ExpressRouteConnection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteConnection',
      type: {
        name: 'Composite',
        className: 'ExpressRouteConnection',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
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
          },
          expressRouteCircuitPeering: {
            required: true,
            serializedName: 'properties.expressRouteCircuitPeering',
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeeringId'
            }
          },
          authorizationKey: {
            required: false,
            serializedName: 'properties.authorizationKey',
            type: {
              name: 'String'
            }
          },
          routingWeight: {
            required: false,
            serializedName: 'properties.routingWeight',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteConnection;
