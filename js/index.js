var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Developed by Pierre Macedo */

var Mpreviewer = function (_React$Component) {
  _inherits(Mpreviewer, _React$Component);

  function Mpreviewer(props) {
    _classCallCheck(this, Mpreviewer);

    var _this = _possibleConstructorReturn(this, (Mpreviewer.__proto__ || Object.getPrototypeOf(Mpreviewer)).call(this, props));

    _this.state = {
      input: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
    _this.updateInput = _this.updateInput.bind(_this);
    return _this;
  }

  _createClass(Mpreviewer, [{
    key: 'updateInput',
    value: function updateInput(event) {
      this.setState({ input: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var inputStyle = {
        border: '1px solid black', width: '100%', height: '400px', paddingTop: '10px'
      };
      var outputStyle = { paddingTop: '10px'
      };
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { marginTop: '30px', fontSize: '40px', marginLeft: '15px' } },
          'Markdown Previewer'
        ),
        React.createElement(
          'div',
          { style: { marginTop: '30px' }, className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-sm-6' },
              React.createElement('textarea', {
                type: 'text',
                style: inputStyle,
                value: this.state.input,
                onChange: this.updateInput })
            ),
            React.createElement('div', { className: 'col-sm-6', style: outputStyle, dangerouslySetInnerHTML: { __html: marked(this.state.input) } })
          )
        )
      );
    }
  }]);

  return Mpreviewer;
}(React.Component);

;

ReactDOM.render(React.createElement(Mpreviewer, null), document.getElementById('main'));