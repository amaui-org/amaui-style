import merge from '@amaui/utils/merge';
import Try from '@amaui/utils/try';

import AmauiStyle from './AmauiStyle';
import AmauiStyleSheetManager from './AmauiStyleSheetManager';
import AmauiTheme from './AmauiTheme';
import { TValue, TValueMethod, IAmauiStyleSheetManagerProps, IMethodResponse, IOptionsAmauiStyle, IOptionsAmauiTheme } from './interfaces';
import { is } from './utils';

export interface IOptions {
  element?: Element;

  name?: string;

  amaui_style?: IOptionsAmauiStyle;

  amaui_theme?: IOptionsAmauiTheme;
}

const optionsDefault: IOptions = {
  amaui_style: {
    get: AmauiStyle.first.bind(AmauiStyle),
  },
  amaui_theme: {
    get: AmauiTheme.first.bind(AmauiTheme),
  }
};

function pure(
  value_: TValue,
  options_: IOptions = {}
): IMethodResponse {
  const options = merge(options_, optionsDefault, { copy: true });

  // Amaui style
  let amauiStyle = options.amaui_style.value || (is('function', options.amaui_style.get) && options.amaui_style.get(options.element));

  if (amauiStyle === undefined) amauiStyle = new AmauiStyle();

  // Amaui theme
  const amauiTheme: AmauiTheme = options.amaui_theme.value || (is('function', options.amaui_theme.get) && options.amaui_theme.get(options.element));

  // Make value if it's a function
  const value = is('function', value_) ? Try(() => (value_ as TValueMethod)(amauiTheme)) : value_;

  // Make an instance of amauiStyleSheetManager
  const amauiStyleSheetManager = new AmauiStyleSheetManager(
    value,
    {
      mode: 'regular',
      pure: true,
      priority: 'lower',
      amauiTheme,
      amauiStyle,
      name: options.name,
      style: {
        attributes: {
          method: 'pure'
        }
      }
    }
  );

  const response: IMethodResponse = {
    ids: amauiStyleSheetManager.ids,
    amaui_style_sheet_manager: amauiStyleSheetManager,
    sheets: amauiStyleSheetManager.sheets,
    add: amauiStyleSheetManager.add.bind(amauiStyleSheetManager),
    set props(value__: IAmauiStyleSheetManagerProps) { amauiStyleSheetManager.props = value__; },
    update: amauiStyleSheetManager.update.bind(amauiStyleSheetManager),
    remove: amauiStyleSheetManager.remove.bind(amauiStyleSheetManager),
    addRule: amauiStyleSheetManager.sheets.static[0] && amauiStyleSheetManager.sheets.static[0].addRule.bind(amauiStyleSheetManager.sheets.static[0]),
  };

  // Response
  return response;
}

export default pure;
