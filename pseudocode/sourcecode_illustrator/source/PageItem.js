/**
 * Any art item. Every art item and group in a document is a page item. You may refer to a page item as an element of a document, layer, or group item.
 * 
 * The PageItem class gives you complete access to every art item contained in an Illustrator document. The PageItem class is the superclass of all artwork objects in a document. The CompoundPathItem, GroupItem, MeshItem, PathItem, PlacedItem, PluginItem, RasterItem, and TextFrame classes each inherit a set of properties from the PageItem class.
 * 
 * You cannot create a PageItem directly, you must create one of the specific PageItem subclasses, such as PathItem.
 * 
 * @constructor
 */
function PageItem() {
	/**
	 * Is this object used to create a knockout.
	 * @type {KnockoutState}
	 */
	this.artworkKnockout = null;

	/**
	 * The mode to use when compositing this object. An object is considered composited when its opacity is set to less than 100.0 (100%).
	 * @type {BlendModes}
	 */
	this.blendingMode = null;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @type {rect}
	 */
	this.controlBounds = [0, 0, 0, 0];

	/**
	 * Read-only. If true, this page item is editable.
	 * @type {boolean}
	 */
	this.editable = true;

	/**
	 * Read-only. The object’s bounds excluding the stroke width.
	 * @type {rect}
	 */
	this.geometricBounds = [0, 0, 0, 0];

	/**
	 *  The height of the page item, calculated from the geometric bounds. Range: 0.0 to 16348.0
	 *  @type {real}
	 */
	this.height = 0.0;

	/**
	 * If true, this page item is hidden.
	 * @type {boolean}
	 */
	this.hidden = false;

	/**
	 *  If true, this object is isolated.
	 *  @type {boolean}
	 */
	this.isIsolated = false;

	/**
	 * Read-only. The layer to which this page item belongs.
	 * @type {Layer}
	 */
	this.layer = null;

	/**
	 * The left position of the art item. number (double) 
	 * @type {number}
	 */
	this.left = 0.0;

	/**
	 * If true, this page item is locked.
	 * @type {boolean}
	 */
	this.locked = false;

	/**
	 * The name of this page item.
	 * @type {string}
	 */
	this.name = "";

	/**
	 * The note assigned to this item.
	 * @type {string}
	 */
	this.note = "";

	/**
	 * The opacity of this object, where 100.0 is completely opaque and 0.0 is completely transparent.
	 * @type {real}
	 */
	this.opacity = 0.0;

	/**
	 * Read-only. The parent of this object.
	 * @type {object}
	 */
	this.parent = null;

	/**
	 * True if this item is aligned to the pixel grid.
	 * @type {boolean}
	 */
	this.pixelAligned = false;

	/**
	 * The position (in points) of the top left corner of the item in the format {x, y}. Does not include stroke weight.
	 * @type {point}
	 */
	this.position = [0, 0];

	/**
	 * If true, this object is selected.
	 * @type {boolean}
	 */
	this.selected = false;

	/**
	 * If true, preserve slices.
	 * @type {boolean}
	 */
	this.sliced = false;

	/**
	 * The collection of tags associated with this page item.
	 * @type {Tags}
	 */
	this.tags = null;

	/**
	 * The top position of the art item. number (double) 
	 * @type {number}
	 */
	this.top = 0.0;

	/**
	 *  Read-only. The class name of the object.
	 *  @type {string}
	 */
	this.typename = "";

	/**
	 * The value of the Adobe URL tag assigned to this page item.
	 * @type {string}
	 */
	this.URL = "";

	/**
	 *  The visibility variable to which this page item path is bound.
	 *  @type {anything}
	 */
	this.visibilityVariable = null;

	/**
	 * Read-only. The object’s visible bounds, including stroke width of any objects in the illustration.
	 * @type {rect}
	 */
	this.visibleBounds = [0, 0, 0, 0];

	/**
	 * The width of the page item, calculated from the geometric bounds. Range: 0.0 to 16348.0
	 * @type {real}
	 */
	this.width = 0.0;

	/**
	 * If true, the text frame object should be wrapped inside this object.
	 * @type {boolean}
	 */
	this.wrapInside = false;

	/**
	 * The offset to use when wrapping text around this object. number (double) 
	 * @type {number}
	 */
	this.wrapOffset = 0.0;

	/**
	 *  If true, wrap text frame objects around this object (text frame must be above the object).
	 *  @type {boolean}
	 */
	this.wrapped = false;

	/**
	 *  Read-only. The drawing order of the art within its group or layer. number (long)
	 *  @type {number}
	 */
	this.zOrderPosition = 0.0;
}

PageItem.prototype = {
	/**
	 * Places art object(s) in a perspective grid at a specified position and grid plane.
	 * @param {number} posX No Description
	 * @param {number} posY No Description
	 * @param {PerspectiveGrid|PlaneType } perspectiveGridPlane No Description
	 */
	bringInPerspective: function(posX, posY, perspectiveGridPlane) {},

	/**
	 * Scales art object(s).
	 * @param {number} scaleX double
	 * @param {number} scaleY double
	 * @param {boolean} changePositions No Description
	 * @param {boolean} changeFillPatterns No Description
	 * @param {boolean} changeFillGradients No Description
	 * @param {boolean} changeStrokePattern No Description
	 * @param {number} changeLineWidths  double
	 * @param {Transformation} scaleAbout No Description
	 */
	resize: function(scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {},

	/**
	 * Rotates art object(s).
	 * @param {number} angle double
	 * @param {boolean} changePositions No Description
	 * @param {boolean} changeFillPatterns No Description
	 * @param {boolean} changeFillGradients No Description
	 * @param {boolean} changeStrokePattern No Description
	 * @param {Transformation} rotateAbout No Description
	 */
	rotate: function(angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {},


	/**
	 * Transforms art object:(s) using a transformation matrix.
	 * @param {matrix} transformationMatrix No Description
	 * @param {boolean} changePositions No Description
	 * @param {boolean} changeFillPatterns No Description
	 * @param {boolean} changeFillGradients No Description
	 * @param {boolean} changeStrokePattern No Description
	 * @param {number} changeLineWidth  double
	 * @param {Transformation} transformAbout No Description
	 */
	transform: function(transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidth, transformAbout) {},


	/**
	 * Repositions art object(s).
	 * @param {number} deltaX  double
	 * @param {number} deltaY double
	 * @param {boolean} transformObjects No Description
	 * @param {boolean} transformFillPatterns No Description
	 * @param {boolean} transformFillGradents No Description
	 * @param {boolean} transformStrokePattern No Description
	 */
	translate: function(deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradents, transformStrokePattern) {},


	/**
	 * Arranges the art relative to other art in the group or layer.
	 * @param {ZOrderMethod} zOrderCmd No Description
	 */
	zOrder: function(zOrderCmd) {}

};


module.exports = PageItem;