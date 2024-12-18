import isEnvironment from '@onesy/utils/isEnvironment';

import OnesyStyle from './OnesyStyle';
import { makeName } from './utils';

export interface IOptionsDom {
  unique?: boolean;
}

export interface IMakeClassName {
  value?: any;
  arguments?: any;
  version?: 'development' | 'production';
}

export interface IOptions {
  production?: boolean;
  dom?: IOptionsDom;
}

const optionsDefault: IOptions = {
  production: (
    isEnvironment('browser') ||
    (isEnvironment('nodejs') && ['prod', 'production'].indexOf(process.env.NODE_ENV) > -1)
  )
};

let onesyMakeClassNameInc = 0;

function makeClassName(onesyStyle: OnesyStyle, options_: IOptions = {}) {
  const options = { ...optionsDefault, ...options_ };

  const prefix = onesyStyle?.options?.classNamePrefix || '';

  // If both dev and prod are false, then dev is true
  const production = options.production !== undefined ? options.production : optionsDefault.production;

  const makeNameMethodClassName = makeName();
  const makeNameMethodKeyframesName = makeName();

  const domUnique = (value: string) => {
    const allClassNames = [...new Set(Array.from(window.document.querySelectorAll('[class]')).flatMap(item => [...item.classList]))];

    return allClassNames.indexOf(value) === -1;
  };

  const method = (method_ = makeNameMethodClassName) => {
    const made = [];

    return (value_: { property: string; value: any; }): IMakeClassName => {
      const value: IMakeClassName = {
        arguments: {
          value: value_
        }
      };

      // Make a class name
      // Production
      if (production) {
        value.value = `${prefix}${method_.next().value}`;

        while (true) {
          if (
            made.includes(value.value) ||
            (options.dom?.unique && !domUnique(value.value))
          ) {
            value.value = `${prefix}${method_.next().value}`;
          }
          else break;
        }
      }
      // Development
      else {
        value.value = `${prefix}${value_.property}-${++onesyMakeClassNameInc}`;

        while (true) {
          if (
            (options.dom?.unique && !domUnique(value.value))
          ) {
            value.value = `${prefix}${value_?.property}-${++onesyMakeClassNameInc}`;
          }
          else break;
        }
      }

      made.push(value);

      return value;
    };
  };

  const methodClassName = method();

  const methodKeyframesName = method(makeNameMethodKeyframesName);

  // Add methods to subscriptions
  if (onesyStyle) {
    onesyStyle.subscriptions.className.name.subscribe(methodClassName);

    onesyStyle.subscriptions.keyframes.name.subscribe(methodKeyframesName);
  }

  const remove = () => {
    // Remove methods from subscriptions
    if (onesyStyle) {
      onesyStyle.subscriptions.className.name.unsubscribe(methodClassName);

      onesyStyle.subscriptions.keyframes.name.unsubscribe(methodKeyframesName);
    }
  };

  const response = {
    methods: {
      method: methodClassName,
    },
    remove,
  };

  return response;
}

export default makeClassName;
