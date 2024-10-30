/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    PlainText = _wp$blocks.PlainText;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    withColors = _wp$editor.withColors,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl;
var _wp$element = wp.element,
    compose = _wp$element.compose,
    Fragment = _wp$element.Fragment;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;


registerBlockType("new/complete-block", {
	title: __("Custom New Parent Block"),
	icon: "welcome-add-page",
	category: "common",
	attributes: {
		textString: {
			type: "array",
			source: "children",
			selector: "h2"
		},
		fontColor: {
			type: "string",
			default: "black"
		},
		borderColor: {
			type: "string",
			default: "Black"
		}
	},
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    textString = _props$attributes.textString,
		    fontColor = _props$attributes.fontColor,
		    borderColor = _props$attributes.borderColor;
		var setAttributes = props.setAttributes,
		    className = props.className;

		var ALLOWED_BLOCKS = ["new/child-block", "core/paragraph"];

		function onTextColorChange(changes) {
			setAttributes({
				fontColor: changes
			});
		}

		function onTextChange(changes) {
			setAttributes({
				textString: changes
			});
		}

		function onBorderColorChange(changes) {
			setAttributes({
				borderColor: changes
			});
		}

		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"strong",
					null,
					"Select a font color:"
				),
				wp.element.createElement(ColorPalette, { value: fontColor, onChange: onTextColorChange })
			),
			wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"strong",
					null,
					"Select Border color:"
				),
				wp.element.createElement(ColorPalette, { value: borderColor, onChange: onBorderColorChange })
			)
		), wp.element.createElement(
			"div",
			{
				className: "main",
				"data-target": "" + borderColor,
				style: {
					borderTop: "6px",
					borderTopColor: "" + borderColor,
					borderTopStyle: "solid"
				}
			},
			wp.element.createElement(RichText, {
				style: { color: fontColor },
				tagName: "h2",
				onChange: onTextChange,
				"class": "content",
				value: textString,
				placeholder: __("Main Block Title…")
			}),
			wp.element.createElement(InnerBlocks, { allowedBlocks: ALLOWED_BLOCKS })
		)];
	},
	save: function save(props) {
		var attributes = props.attributes,
		    className = props.className;
		var _props$attributes2 = props.attributes,
		    fontColor = _props$attributes2.fontColor,
		    textString = _props$attributes2.textString,
		    borderColor = _props$attributes2.borderColor;

		return wp.element.createElement(
			"div",
			{
				className: className,
				style: {
					borderTop: "6px",
					borderTopColor: "" + borderColor,
					borderTopStyle: "solid"
				}
			},
			wp.element.createElement(
				"h2",
				{ "class": "content", style: { color: fontColor } },
				textString
			),
			wp.element.createElement(InnerBlocks.Content, null)
		);
	}
});

registerBlockType("new/child-block", {
	title: __("Repeater Child Block"),
	icon: "image-rotate",
	category: "common",
	attributes: {
		textString: {
			type: "array",
			source: "children",
			selector: "h2"
		},
		fontColor: {
			type: "string",
			default: "black"
		},

		backgroundImage: {
			type: "string",
			default: null // no image by default!
		},
		content: {
			type: "array",
			source: "children",
			selector: "p"
		},
		mediaID: {
			type: "number"
		},
		mediaURL: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src"
		},
		font_size: {
			type: "number",
			default: "18"
		}
	},
	edit: function edit(props) {
		var _props$attributes3 = props.attributes,
		    fontColor = _props$attributes3.fontColor,
		    textString = _props$attributes3.textString,
		    overlayColor = _props$attributes3.overlayColor,
		    backgroundImage = _props$attributes3.backgroundImage,
		    content = _props$attributes3.content,
		    mediaURL = _props$attributes3.mediaURL,
		    mediaID = _props$attributes3.mediaID,
		    font_size = _props$attributes3.font_size;
		var setAttributes = props.setAttributes,
		    className = props.className,
		    classes = props.classes;


		var onImage1Select = function onImage1Select(media) {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id
			});
		};

		function onTextColorChange(changes) {
			setAttributes({
				fontColor: changes
			});
		}

		function onH2Change(changes) {
			setAttributes({
				textString: changes
			});
		}

		function onContentChange(changes) {
			setAttributes({
				content: changes
			});
		}
		function onFontSizeChange(changes) {
			setAttributes({
				font_size: changes
			});
		}

		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"strong",
					null,
					"Select H2Heading font color:"
				),
				wp.element.createElement(ColorPalette, { value: fontColor, onChange: onTextColorChange })
			),
			wp.element.createElement(
				"div",
				null,
				wp.element.createElement(
					"strong",
					null,
					"Select Content Font Size:"
				),
				wp.element.createElement(RangeControl, {
					label: "Columns",
					value: font_size,
					onChange: onFontSizeChange,
					min: 10,
					max: 40
				})
			)
		), wp.element.createElement(
			"div",
			null,
			wp.element.createElement(
				"div",
				{ className: "mainImage" },
				wp.element.createElement(MediaUpload, {
					onSelect: onImage1Select,
					type: "image",
					value: mediaID,
					render: function render(_ref) {
						var open = _ref.open;
						return wp.element.createElement(
							Button,
							{
								className: mediaID ? "image-button" : "button button-large",
								onClick: open
							},
							!mediaID ? __("Upload Image") : wp.element.createElement("img", { src: mediaURL })
						);
					}
				})
			),
			wp.element.createElement(
				"div",
				{ "class": "side-content" },
				wp.element.createElement(
					RichText,
					{
						tagName: "h2",
						onChange: onH2Change,
						className: "anchor-content",
						style: { color: fontColor },
						value: textString,
						placeholder: __("Add Content Anchor Heading")
					},
					textString
				),
				wp.element.createElement(
					RichText,
					{
						tagName: "p",
						onChange: onContentChange,
						className: "desc-body",
						value: content,
						placeholder: __("Add Content"),
						style: { fontSize: font_size + "px" }
					},
					content
				)
			)
		)];
	},
	save: function save(props) {
		var attributes = props.attributes,
		    className = props.className,
		    classes = props.classes;
		var _props$attributes4 = props.attributes,
		    fontColor = _props$attributes4.fontColor,
		    backgroundImage = _props$attributes4.backgroundImage,
		    textString = _props$attributes4.textString,
		    content = _props$attributes4.content,
		    mediaURL = _props$attributes4.mediaURL,
		    mediaID = _props$attributes4.mediaID,
		    font_size = _props$attributes4.font_size;


		return wp.element.createElement(
			"div",
			null,
			wp.element.createElement(
				"div",
				{ "class": "mainImage" },
				mediaURL && wp.element.createElement("img", { "class": "recipe-image", src: mediaURL })
			),
			wp.element.createElement(
				"div",
				{ classes: classes },
				wp.element.createElement(RichText.Content, {
					tagName: "h2",
					style: { color: fontColor },
					value: textString
				}),
				wp.element.createElement(RichText.Content, {
					tagName: "p",
					style: { fontSize: font_size + "px" },
					value: content
				})
			)
		);
	}
});

/***/ })
/******/ ]);