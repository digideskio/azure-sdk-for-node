/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the Domain class.
 * @constructor
 * @member {uuid} [id]
 * @member {string} [name]
 * @member {string} [type] Possible values include: 'Classification',
 * 'ObjectDetection'
 * @member {boolean} [exportable]
 * @member {boolean} [enabled]
 */
export interface Domain {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly exportable?: boolean;
  readonly enabled?: boolean;
}

/**
 * @class
 * Initializes a new instance of the ImageTagCreateEntry class.
 * @constructor
 * @member {uuid} [imageId]
 * @member {uuid} [tagId]
 */
export interface ImageTagCreateEntry {
  imageId?: string;
  tagId?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageTagCreateBatch class.
 * @constructor
 * @member {array} [tags]
 */
export interface ImageTagCreateBatch {
  tags?: ImageTagCreateEntry[];
}

/**
 * @class
 * Initializes a new instance of the ImageTagCreateSummary class.
 * @constructor
 * @member {array} [created]
 * @member {array} [duplicated]
 * @member {array} [exceeded]
 */
export interface ImageTagCreateSummary {
  created?: ImageTagCreateEntry[];
  duplicated?: ImageTagCreateEntry[];
  exceeded?: ImageTagCreateEntry[];
}

/**
 * @class
 * Initializes a new instance of the ImageRegionCreateEntry class.
 * @constructor
 * @member {uuid} [imageId]
 * @member {uuid} [tagId]
 * @member {number} [left]
 * @member {number} [top]
 * @member {number} [width]
 * @member {number} [height]
 */
export interface ImageRegionCreateEntry {
  imageId?: string;
  tagId?: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

/**
 * @class
 * Initializes a new instance of the ImageRegionCreateBatch class.
 * @constructor
 * Batch of image region information to create.
 *
 * @member {array} [regions]
 */
export interface ImageRegionCreateBatch {
  regions?: ImageRegionCreateEntry[];
}

/**
 * @class
 * Initializes a new instance of the ImageRegionCreateResult class.
 * @constructor
 * @member {uuid} [imageId]
 * @member {uuid} [regionId]
 * @member {string} [tagName]
 * @member {date} [created]
 * @member {uuid} [tagId]
 * @member {number} [left]
 * @member {number} [top]
 * @member {number} [width]
 * @member {number} [height]
 */
export interface ImageRegionCreateResult {
  readonly imageId?: string;
  readonly regionId?: string;
  readonly tagName?: string;
  readonly created?: Date;
  tagId?: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

/**
 * @class
 * Initializes a new instance of the ImageRegionCreateSummary class.
 * @constructor
 * @member {array} [created]
 * @member {array} [duplicated]
 * @member {array} [exceeded]
 */
export interface ImageRegionCreateSummary {
  created?: ImageRegionCreateResult[];
  duplicated?: ImageRegionCreateEntry[];
  exceeded?: ImageRegionCreateEntry[];
}

/**
 * @class
 * Initializes a new instance of the ImageTag class.
 * @constructor
 * @member {uuid} [tagId]
 * @member {string} [tagName]
 * @member {date} [created]
 */
export interface ImageTag {
  readonly tagId?: string;
  readonly tagName?: string;
  readonly created?: Date;
}

/**
 * @class
 * Initializes a new instance of the ImageRegion class.
 * @constructor
 * @member {uuid} [regionId]
 * @member {string} [tagName]
 * @member {date} [created]
 * @member {uuid} [tagId]
 * @member {number} [left]
 * @member {number} [top]
 * @member {number} [width]
 * @member {number} [height]
 */
export interface ImageRegion {
  readonly regionId?: string;
  readonly tagName?: string;
  readonly created?: Date;
  tagId?: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

/**
 * @class
 * Initializes a new instance of the Image class.
 * @constructor
 * Image model to be sent as JSON
 *
 * @member {uuid} [id]
 * @member {date} [created]
 * @member {number} [width]
 * @member {number} [height]
 * @member {string} [resizedImageUri] The Uri to the (resized) image used for
 * training
 * @member {string} [thumbnailUri] The Uri to the thumbnail of the original
 * image
 * @member {string} [originalImageUri] The Uri to the original uploaded image
 * @member {array} [tags]
 * @member {array} [regions]
 */
export interface Image {
  readonly id?: string;
  readonly created?: Date;
  readonly width?: number;
  readonly height?: number;
  readonly resizedImageUri?: string;
  readonly thumbnailUri?: string;
  readonly originalImageUri?: string;
  readonly tags?: ImageTag[];
  readonly regions?: ImageRegion[];
}

/**
 * @class
 * Initializes a new instance of the ImageCreateResult class.
 * @constructor
 * @member {string} [sourceUrl]
 * @member {string} [status] Possible values include: 'OK', 'OKDuplicate',
 * 'ErrorSource', 'ErrorImageFormat', 'ErrorImageSize', 'ErrorStorage',
 * 'ErrorLimitExceed', 'ErrorTagLimitExceed', 'ErrorRegionLimitExceed',
 * 'ErrorUnknown', 'ErrorNegativeAndRegularTagOnSameImage'
 * @member {object} [image]
 * @member {uuid} [image.id]
 * @member {date} [image.created]
 * @member {number} [image.width]
 * @member {number} [image.height]
 * @member {string} [image.resizedImageUri] The Uri to the (resized) image used
 * for training
 * @member {string} [image.thumbnailUri] The Uri to the thumbnail of the
 * original image
 * @member {string} [image.originalImageUri] The Uri to the original uploaded
 * image
 * @member {array} [image.tags]
 * @member {array} [image.regions]
 */
export interface ImageCreateResult {
  readonly sourceUrl?: string;
  readonly status?: string;
  readonly image?: Image;
}

/**
 * @class
 * Initializes a new instance of the ImageCreateSummary class.
 * @constructor
 * @member {boolean} [isBatchSuccessful]
 * @member {array} [images]
 */
export interface ImageCreateSummary {
  readonly isBatchSuccessful?: boolean;
  readonly images?: ImageCreateResult[];
}

/**
 * @class
 * Initializes a new instance of the Region class.
 * @constructor
 * @member {uuid} [tagId]
 * @member {number} [left]
 * @member {number} [top]
 * @member {number} [width]
 * @member {number} [height]
 */
export interface Region {
  tagId?: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

/**
 * @class
 * Initializes a new instance of the ImageFileCreateEntry class.
 * @constructor
 * @member {string} [name]
 * @member {buffer} [contents]
 * @member {array} [tagIds]
 * @member {array} [regions]
 */
export interface ImageFileCreateEntry {
  name?: string;
  contents?: Buffer;
  tagIds?: string[];
  regions?: Region[];
}

/**
 * @class
 * Initializes a new instance of the ImageFileCreateBatch class.
 * @constructor
 * @member {array} [images]
 * @member {array} [tagIds]
 */
export interface ImageFileCreateBatch {
  images?: ImageFileCreateEntry[];
  tagIds?: string[];
}

/**
 * @class
 * Initializes a new instance of the ImageUrlCreateEntry class.
 * @constructor
 * @member {string} [url]
 * @member {array} [tagIds]
 * @member {array} [regions]
 */
export interface ImageUrlCreateEntry {
  url?: string;
  tagIds?: string[];
  regions?: Region[];
}

/**
 * @class
 * Initializes a new instance of the ImageUrlCreateBatch class.
 * @constructor
 * @member {array} [images]
 * @member {array} [tagIds]
 */
export interface ImageUrlCreateBatch {
  images?: ImageUrlCreateEntry[];
  tagIds?: string[];
}

/**
 * @class
 * Initializes a new instance of the ImageIdCreateEntry class.
 * @constructor
 * @member {uuid} [id]
 * @member {array} [tagIds]
 * @member {array} [regions]
 */
export interface ImageIdCreateEntry {
  id?: string;
  tagIds?: string[];
  regions?: Region[];
}

/**
 * @class
 * Initializes a new instance of the ImageIdCreateBatch class.
 * @constructor
 * @member {array} [images]
 * @member {array} [tagIds]
 */
export interface ImageIdCreateBatch {
  images?: ImageIdCreateEntry[];
  tagIds?: string[];
}

/**
 * @class
 * Initializes a new instance of the BoundingBox class.
 * @constructor
 * @member {number} [left]
 * @member {number} [top]
 * @member {number} [width]
 * @member {number} [height]
 */
export interface BoundingBox {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

/**
 * @class
 * Initializes a new instance of the RegionProposal class.
 * @constructor
 * @member {number} [confidence]
 * @member {object} [boundingBox]
 * @member {number} [boundingBox.left]
 * @member {number} [boundingBox.top]
 * @member {number} [boundingBox.width]
 * @member {number} [boundingBox.height]
 */
export interface RegionProposal {
  readonly confidence?: number;
  readonly boundingBox?: BoundingBox;
}

/**
 * @class
 * Initializes a new instance of the ImageRegionProposal class.
 * @constructor
 * @member {uuid} [projectId]
 * @member {uuid} [imageId]
 * @member {array} [proposals]
 */
export interface ImageRegionProposal {
  readonly projectId?: string;
  readonly imageId?: string;
  readonly proposals?: RegionProposal[];
}

/**
 * @class
 * Initializes a new instance of the ImageUrl class.
 * @constructor
 * @member {string} [url]
 */
export interface ImageUrl {
  url?: string;
}

/**
 * @class
 * Initializes a new instance of the Prediction class.
 * @constructor
 * @member {number} [probability]
 * @member {uuid} [tagId]
 * @member {string} [tagName]
 * @member {object} [boundingBox]
 * @member {number} [boundingBox.left]
 * @member {number} [boundingBox.top]
 * @member {number} [boundingBox.width]
 * @member {number} [boundingBox.height]
 */
export interface Prediction {
  readonly probability?: number;
  readonly tagId?: string;
  readonly tagName?: string;
  readonly boundingBox?: BoundingBox;
}

/**
 * @class
 * Initializes a new instance of the ImagePrediction class.
 * @constructor
 * @member {uuid} [id]
 * @member {uuid} [project]
 * @member {uuid} [iteration]
 * @member {date} [created]
 * @member {array} [predictions]
 */
export interface ImagePrediction {
  readonly id?: string;
  readonly project?: string;
  readonly iteration?: string;
  readonly created?: Date;
  readonly predictions?: Prediction[];
}

/**
 * @class
 * Initializes a new instance of the PredictionQueryTag class.
 * @constructor
 * @member {uuid} [id]
 * @member {number} [minThreshold]
 * @member {number} [maxThreshold]
 */
export interface PredictionQueryTag {
  readonly id?: string;
  readonly minThreshold?: number;
  readonly maxThreshold?: number;
}

/**
 * @class
 * Initializes a new instance of the PredictionQueryToken class.
 * @constructor
 * @member {string} [session]
 * @member {string} [continuation]
 * @member {number} [maxCount]
 * @member {string} [orderBy] Possible values include: 'Newest', 'Oldest',
 * 'Suggested'
 * @member {array} [tags]
 * @member {uuid} [iterationId]
 * @member {date} [startTime]
 * @member {date} [endTime]
 * @member {string} [application]
 */
export interface PredictionQueryToken {
  session?: string;
  continuation?: string;
  maxCount?: number;
  orderBy?: string;
  tags?: PredictionQueryTag[];
  iterationId?: string;
  startTime?: Date;
  endTime?: Date;
  application?: string;
}

/**
 * @class
 * Initializes a new instance of the StoredImagePrediction class.
 * @constructor
 * result of an image classification request
 *
 * @member {string} [resizedImageUri] The Uri to the (resized) prediction image
 * @member {string} [thumbnailUri] The Uri to the thumbnail of the original
 * prediction image
 * @member {string} [originalImageUri] The Uri to the original prediction image
 * @member {uuid} [domain]
 * @member {uuid} [id]
 * @member {uuid} [project]
 * @member {uuid} [iteration]
 * @member {date} [created]
 * @member {array} [predictions]
 */
export interface StoredImagePrediction {
  readonly resizedImageUri?: string;
  readonly thumbnailUri?: string;
  readonly originalImageUri?: string;
  readonly domain?: string;
  readonly id?: string;
  readonly project?: string;
  readonly iteration?: string;
  readonly created?: Date;
  readonly predictions?: Prediction[];
}

/**
 * @class
 * Initializes a new instance of the PredictionQueryResult class.
 * @constructor
 * @member {object} [token]
 * @member {string} [token.session]
 * @member {string} [token.continuation]
 * @member {number} [token.maxCount]
 * @member {string} [token.orderBy] Possible values include: 'Newest',
 * 'Oldest', 'Suggested'
 * @member {array} [token.tags]
 * @member {uuid} [token.iterationId]
 * @member {date} [token.startTime]
 * @member {date} [token.endTime]
 * @member {string} [token.application]
 * @member {array} [results]
 */
export interface PredictionQueryResult {
  readonly token?: PredictionQueryToken;
  readonly results?: StoredImagePrediction[];
}

/**
 * @class
 * Initializes a new instance of the TagPerformance class.
 * @constructor
 * Represents performance data for a particular tag in a trained iteration
 *
 * @member {uuid} [id]
 * @member {string} [name]
 * @member {number} [precision] Gets the precision
 * @member {number} [precisionStdDeviation] Gets the standard deviation for the
 * precision
 * @member {number} [recall] Gets the recall
 * @member {number} [recallStdDeviation] Gets the standard deviation for the
 * recall
 * @member {number} [averagePrecision] Gets the average precision when
 * applicable
 */
export interface TagPerformance {
  readonly id?: string;
  readonly name?: string;
  readonly precision?: number;
  readonly precisionStdDeviation?: number;
  readonly recall?: number;
  readonly recallStdDeviation?: number;
  readonly averagePrecision?: number;
}

/**
 * @class
 * Initializes a new instance of the IterationPerformance class.
 * @constructor
 * Represents the detailed performance data for a trained iteration
 *
 * @member {array} [perTagPerformance] Gets the per-tag performance details for
 * this iteration
 * @member {number} [precision] Gets the precision
 * @member {number} [precisionStdDeviation] Gets the standard deviation for the
 * precision
 * @member {number} [recall] Gets the recall
 * @member {number} [recallStdDeviation] Gets the standard deviation for the
 * recall
 * @member {number} [averagePrecision] Gets the average precision when
 * applicable
 */
export interface IterationPerformance {
  readonly perTagPerformance?: TagPerformance[];
  readonly precision?: number;
  readonly precisionStdDeviation?: number;
  readonly recall?: number;
  readonly recallStdDeviation?: number;
  readonly averagePrecision?: number;
}

/**
 * @class
 * Initializes a new instance of the ImagePerformance class.
 * @constructor
 * Image performance model
 *
 * @member {array} [predictions]
 * @member {uuid} [id]
 * @member {date} [created]
 * @member {number} [width]
 * @member {number} [height]
 * @member {string} [imageUri]
 * @member {string} [thumbnailUri]
 * @member {array} [tags]
 * @member {array} [regions]
 */
export interface ImagePerformance {
  readonly predictions?: Prediction[];
  readonly id?: string;
  readonly created?: Date;
  readonly width?: number;
  readonly height?: number;
  readonly imageUri?: string;
  readonly thumbnailUri?: string;
  readonly tags?: ImageTag[];
  readonly regions?: ImageRegion[];
}

/**
 * @class
 * Initializes a new instance of the ProjectSettings class.
 * @constructor
 * Represents settings associated with a project
 *
 * @member {uuid} [domainId] Gets or sets the id of the Domain to use with this
 * project
 * @member {string} [classificationType] Gets or sets the classification type
 * of the project. Possible values include: 'Multiclass', 'Multilabel'
 */
export interface ProjectSettings {
  domainId?: string;
  classificationType?: string;
}

/**
 * @class
 * Initializes a new instance of the Project class.
 * @constructor
 * Represents a project
 *
 * @member {uuid} [id] Gets the project id
 * @member {string} [name] Gets or sets the name of the project
 * @member {string} [description] Gets or sets the description of the project
 * @member {object} [settings] Gets or sets the project settings
 * @member {uuid} [settings.domainId] Gets or sets the id of the Domain to use
 * with this project
 * @member {string} [settings.classificationType] Gets or sets the
 * classification type of the project. Possible values include: 'Multiclass',
 * 'Multilabel'
 * @member {date} [created] Gets the date this project was created
 * @member {date} [lastModified] Gets the date this project was last modifed
 * @member {string} [thumbnailUri] Gets the thumbnail url representing the
 * project
 */
export interface Project {
  readonly id?: string;
  name?: string;
  description?: string;
  settings?: ProjectSettings;
  readonly created?: Date;
  readonly lastModified?: Date;
  readonly thumbnailUri?: string;
}

/**
 * @class
 * Initializes a new instance of the Iteration class.
 * @constructor
 * Iteration model to be sent over JSON
 *
 * @member {uuid} [id] Gets the id of the iteration
 * @member {string} [name] Gets or sets the name of the iteration
 * @member {boolean} [isDefault] Gets or sets a value indicating whether the
 * iteration is the default iteration for the project
 * @member {string} [status] Gets the current iteration status
 * @member {date} [created] Gets the time this iteration was completed
 * @member {date} [lastModified] Gets the time this iteration was last modified
 * @member {date} [trainedAt] Gets the time this iteration was last modified
 * @member {uuid} [projectId] Gets the project id of the iteration
 * @member {boolean} [exportable] Whether the iteration can be exported to
 * another format for download
 * @member {uuid} [domainId] Get or sets a guid of the domain the iteration has
 * been trained on
 * @member {string} [classificationType] Gets the classification type of the
 * project. Possible values include: 'Multiclass', 'Multilabel'
 */
export interface Iteration {
  readonly id?: string;
  name?: string;
  isDefault?: boolean;
  readonly status?: string;
  readonly created?: Date;
  readonly lastModified?: Date;
  readonly trainedAt?: Date;
  readonly projectId?: string;
  readonly exportable?: boolean;
  readonly domainId?: string;
  readonly classificationType?: string;
}

/**
 * @class
 * Initializes a new instance of the ExportModel class.
 * @constructor
 * @member {string} [platform] Possible values include: 'CoreML', 'TensorFlow',
 * 'DockerFile', 'ONNX'
 * @member {string} [status] Possible values include: 'Exporting', 'Failed',
 * 'Done'
 * @member {string} [downloadUri]
 * @member {string} [flavor] Possible values include: 'Linux', 'Windows',
 * 'ONNX10', 'ONNX12'
 * @member {boolean} [newerVersionAvailable]
 */
export interface ExportModel {
  readonly platform?: string;
  readonly status?: string;
  readonly downloadUri?: string;
  readonly flavor?: string;
  readonly newerVersionAvailable?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Tag class.
 * @constructor
 * Represents a Tag
 *
 * @member {uuid} [id] Gets the Tag ID
 * @member {string} [name] Gets or sets the name of the tag
 * @member {string} [description] Gets or sets the description of the tag
 * @member {string} [type] Gets or sets the type of the tag. Possible values
 * include: 'Regular', 'Negative'
 * @member {number} [imageCount] Gets the number of images with this tag
 */
export interface Tag {
  readonly id?: string;
  name?: string;
  description?: string;
  type?: string;
  readonly imageCount?: number;
}
