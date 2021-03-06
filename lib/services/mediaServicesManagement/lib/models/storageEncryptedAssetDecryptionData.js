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
 * Data needed to decrypt asset files encrypted with legacy storage encryption.
 *
 */
class StorageEncryptedAssetDecryptionData {
  /**
   * Create a StorageEncryptedAssetDecryptionData.
   * @member {buffer} [key] The Asset File storage encryption key.
   * @member {array} [assetFileEncryptionMetadata] Asset File encryption
   * metadata.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageEncryptedAssetDecryptionData
   *
   * @returns {object} metadata of StorageEncryptedAssetDecryptionData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageEncryptedAssetDecryptionData',
      type: {
        name: 'Composite',
        className: 'StorageEncryptedAssetDecryptionData',
        modelProperties: {
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'ByteArray'
            }
          },
          assetFileEncryptionMetadata: {
            required: false,
            serializedName: 'assetFileEncryptionMetadata',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AssetFileEncryptionMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'AssetFileEncryptionMetadata'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StorageEncryptedAssetDecryptionData;
