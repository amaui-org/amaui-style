/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';
import OnesySubscription from '@onesy/subscription';

import { evaluate } from '../utils/js/test/utils';

import * as OnesyStyle from '../src';
import { TValue } from '../src';

group('Use cases', () => {

  to('onesyStyle sub values', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyStyle = new window.OnesyStyle.OnesyStyle(window.document.body);

      // Plugins
      onesyStyle.plugins.add = [
        window.OnesyStyle.unit,
        window.OnesyStyle.sort,
        window.OnesyStyle.prefix,
        window.OnesyStyle.makeClassName,
        window.OnesyStyle.rtl,
      ];

      const a = {
        '@keyframes a': {
          '0%': {
            color: 'white',
          },
          '40%': {
            color: 'yellow',
          },
        },

        a: {
          width: 100,

          'max-width': 100,

          // Simple
          background: {
            color: '#faa'
          },

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        },

        a7: {
          width: 100,

          // Function
          background: props => props.a === 1 ? 'yellow' : 'orange',
        },
      };

      const values = [];

      // Add onesyStyle subs
      Object.keys(onesyStyle.subscriptions).forEach(prop => {
        Object.keys(onesyStyle.subscriptions[prop]).forEach(prop_ => onesyStyle.subscriptions[prop][prop_].subscribe(() => values.push(`${prop}-${prop_}`)));
      });

      const style = window.OnesyStyle.style(a, { onesy_style: { value: onesyStyle } });

      // Add
      const response = style.add();

      // Update props
      style.props = { ids: response.ids.dynamic, props: { a: 1 } };

      // Update
      style.update({
        '@keyframes a': {
          '0%': {
            color: 'white',
          },
          '40%': {
            color: 'yellow',
          },
        },

        a: {
          width: 100,

          'max-width': 100,

          // Simple
          background: {
            color: '#faa'
          },

          margin: '0 14px 4px 40px',

          // rtl
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        },

        a7: {
          // Function
          background: props => props.a === 1 ? 'yellow' : 'orange',
        },
      });

      style.remove(response.ids.dynamic);

      return [
        values
      ];
    });

    const onesyStyle = new OnesyStyle.OnesyStyle({ optimize: true });

    // Plugins
    onesyStyle.plugins.add = [
      OnesyStyle.unit,
      OnesyStyle.sort,
      OnesyStyle.prefix,
      OnesyStyle.makeClassName,
      OnesyStyle.rtl,
    ];

    const a: TValue = {
      '@keyframes a': {
        '0%': {
          color: 'white',
        },
        '40%': {
          color: 'yellow',
        },
      },

      a: {
        width: 100,

        'max-width': 100,

        // Simple
        background: {
          color: '#faa',
        },

        margin: '0 14px 4px 40px',

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',
      },

      a7: {
        width: 100,

        // Function
        background: props => props.a === 1 ? 'yellow' : 'orange',
      },
    };

    const onesyStyleValues = [];

    // Add onesyStyle subs
    Object.keys(onesyStyle.subscriptions).forEach(prop => {
      Object.keys(onesyStyle.subscriptions[prop]).forEach(prop_ => onesyStyle.subscriptions[prop][prop_].subscribe(() => onesyStyleValues.push(`${prop}-${prop_}`)));
    });

    const style = OnesyStyle.style(a, { onesy_style: { value: onesyStyle } });

    // Add
    const response = style.add();

    // Update props
    style.props = { ids: response.ids.dynamic, props: { a: 1 } };

    // Update
    style.update({
      '@keyframes a': {
        '0%': {
          color: 'white',
        },
        '40%': {
          color: 'yellow',
        },
      },

      a: {
        width: 100,

        'max-width': 100,

        // Simple
        background: {
          color: '#faa'
        },

        margin: '0 14px 4px 40px',

        // rtl
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',
      },

      a7: {
        // Function
        background: props => props.a === 1 ? 'yellow' : 'orange',
      },
    });

    style.remove(response.ids.dynamic);

    const valueNode = [
      onesyStyleValues
    ];

    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => {
      Object.keys(onesyStyle.subscriptions).forEach(prop => {
        Object.keys(onesyStyle.subscriptions[prop]).forEach(prop_ => assert(value.indexOf(`${prop}-${prop_}`) > -1));
      });
    });
  });

  to('Readding, not yet removed static onesyStyleSheet, that is left for a ref value', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyStyle = new window.OnesyStyle.OnesyStyle(window.document.body, undefined, undefined, { optimize: true });

      // Plugins
      onesyStyle.plugins.add = [
        window.OnesyStyle.unit,
        window.OnesyStyle.sort,
        window.OnesyStyle.prefix,
        window.OnesyStyle.makeClassName,
        window.OnesyStyle.rtl,
      ];

      const a = {
        a: {
          width: 100,

          'max-width': 100,

          // Simple
          background: {
            color: '#faa'
          },

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        },

        a1: {
          width: 100,

          'max-width': 100,
        },
      };

      const style = window.OnesyStyle.style(a, { onesy_style: { value: onesyStyle } });

      const style1 = window.OnesyStyle.style({ a: a.a }, { onesy_style: { value: onesyStyle } });

      // Add
      style.add();

      style1.add();

      let css = '';

      Array.from(window.document.styleSheets).forEach((sheet: any) => {
        Array.from(sheet.cssRules).forEach((rule: any) => {
          css += rule.cssText;
        });
      });

      const response = [
        onesyStyle.sheets.length,
        style.sheets.static[0].rules.length,
        css
      ];

      style.remove();

      css = '';

      Array.from(window.document.styleSheets).forEach((sheet: any) => {
        Array.from(sheet.cssRules).forEach((rule: any) => {
          css += rule.cssText;
        });
      });

      response.push(
        style.sheets.static[0].rules.length,
        css
      );

      // Readd
      style.add();

      css = '';

      Array.from(window.document.styleSheets).forEach((sheet: any) => {
        Array.from(sheet.cssRules).forEach((rule: any) => {
          css += rule.cssText;
        });
      });

      response.push(
        style.sheets.static[0].rules.length,
        css
      );

      return response;
    });

    const onesyStyle = new OnesyStyle.OnesyStyle({ optimize: true });

    // Plugins
    onesyStyle.plugins.add = [
      OnesyStyle.unit,
      OnesyStyle.sort,
      OnesyStyle.prefix,
      OnesyStyle.makeClassName,
      OnesyStyle.rtl,
    ];

    const a = {
      a: {
        width: 100,

        'max-width': 100,

        // Simple
        background: {
          color: '#faa'
        },

        margin: '0 14px 4px 40px',

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',
      },

      a1: {
        width: 100,

        'max-width': 100,
      },
    };

    const style = OnesyStyle.style(a, { onesy_style: { value: onesyStyle } });

    const style1 = OnesyStyle.style({ a: a.a }, { onesy_style: { value: onesyStyle } });

    // Add
    style.add();

    style1.add();

    const response = [
      onesyStyle.sheets.length,
      style.sheets.static[0].rules.length
    ];

    style.remove();

    response.push(
      style.sheets.static[0]?.rules.length
    );

    // Readd
    style.add();

    response.push(
      style.sheets.static[0]?.rules.length
    );

    const valueNode = response;

    const values = [...valueBrowsers];

    assert(valueNode).eql([
      2,
      2,
      1,
      2
    ]);

    assert(values[0]).eql([
      2,
      2,
      ".aa { float: left; margin: 0px 14px 4px 41px; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }",
      1,
      ".aa { float: left; margin: 0px 14px 4px 41px; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }",
      2,
      ".aa { float: left; margin: 0px 14px 4px 41px; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ac { max-width: 100px; width: 100px; }"
    ]);

    assert(values[1]).eql([
      2,
      2,
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }",
      1,
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }",
      2,
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ac { max-width: 100px; width: 100px; }"
    ]);

    assert(values[2]).eql([
      2,
      2,
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }",
      1,
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }",
      2,
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ac { max-width: 100px; width: 100px; }"
    ]);
  });

  to('xss injection attack', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyStyle = new window.OnesyStyle.OnesyStyle(window.document.body, undefined, undefined, { optimize: true });

      // Plugins
      onesyStyle.plugins.add = [
        window.OnesyStyle.unit,
        window.OnesyStyle.sort,
        window.OnesyStyle.prefix,
        window.OnesyStyle.makeClassName,
        window.OnesyStyle.rtl,
      ];

      const a = {
        a: {
          width: 100,

          'max-width': 100,

          // Injection attack
          color: window.location.href,

          // Simple
          background: {
            color: '#faa'
          },

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        },

        a1: {
          width: 100,

          'max-width': 100,
        },
      };

      const style = window.OnesyStyle.style(a, { onesy_style: { value: onesyStyle } });

      // Add
      style.add();

      let css = '';

      Array.from(window.document.styleSheets).forEach((sheet: any) => {
        Array.from(sheet.cssRules).forEach((rule: any) => {
          css += rule.cssText;
        });
      });

      const response = [
        css
      ];
      return response;
    });

    const values = [...valueBrowsers];

    assert(values[0]).eql([
      ".aa { float: left; margin: 0px 14px 4px 41px; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }",
    ]);

    assert(values[1]).eql([
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }",
    ]);

    assert(values[2]).eql([
      ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }",
    ]);
  });

  to('Pseudo classes and elements', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      const onesyStyle = new window.OnesyStyle.OnesyStyle(window.document.body, undefined, undefined, { optimize: true });

      // Plugins
      onesyStyle.plugins.add = [
        window.OnesyStyle.unit,
        window.OnesyStyle.sort,
        window.OnesyStyle.prefix,
        window.OnesyStyle.makeClassName,
        window.OnesyStyle.rtl,
      ];

      const a = {
        a: {
          width: 100,

          'max-width': 100,

          // Simple
          background: {
            color: '#faa'
          },

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',

          '&:active': {
            color: 'yellow',
          },

          '&::before': {
            content: "'a'",
            width: 100,
            background: 'yellow'
          }
        },

        a1: {
          width: 100,

          'max-width': 100,
        },
      };

      const style = window.OnesyStyle.style(a, { onesy_style: { value: onesyStyle } });

      // Add
      style.add();

      let css = '';

      Array.from(window.document.styleSheets).forEach((sheet: any) => {
        Array.from(sheet.cssRules).forEach((rule: any) => {
          css += rule.cssText;
        });
      });

      const response = [
        css
      ];

      return response;
    });

    const onesyStyle = new OnesyStyle.OnesyStyle({ optimize: true });

    // Plugins
    onesyStyle.plugins.add = [
      OnesyStyle.unit,
      OnesyStyle.sort,
      OnesyStyle.prefix,
      OnesyStyle.makeClassName,
      OnesyStyle.rtl,
    ];

    const a = {
      a: {
        width: 100,

        'max-width': 100,

        // Simple
        background: {
          color: '#faa'
        },

        margin: '0 14px 4px 40px',

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',

        '&:active': {
          color: 'yellow',
        },

        '&::before': {
          content: "'a'",
          width: 100,
          background: 'yellow'
        }
      },

      a1: {
        width: 100,

        'max-width': 100,
      },
    };

    const style = OnesyStyle.style(a, { onesy_style: { value: onesyStyle } });

    // Add
    style.add();

    const response = [
      style.onesy_style_sheet_manager.css
    ];

    const valueNode = response;

    const values = [valueNode, ...valueBrowsers];

    assert(values).eql([
      [
        "\n\n.a-0 {\n  float: left;\n  margin: 0 14px 4px 40px;\n  margin-left: 41px;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n  mask-origin: inherit;\n  mask-position: 40% 74%;\n  max-width: 100px;\n  padding: 40px;\n  padding-left: 41px;\n  position: sticky;\n  transition: all .4s ease;\n  width: 100px;\n}\n\n.a1-1 {\n  max-width: 100px;\n  width: 100px;\n}\n\n.a-0:active {\n  color: yellow;\n}\n\n.a-0::before {\n  background: yellow;\n  content: 'a';\n  width: 100px;\n}\n\n"
      ],
      [
        ".aa { float: left; margin: 0px 14px 4px 41px; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }.aa:active { color: yellow; }.aa::before { background: yellow; content: \"a\"; width: 100px; }"
      ],
      [
        ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }.aa:active { color: yellow; }.aa::before { background: yellow none repeat scroll 0% 0%; content: \"a\"; width: 100px; }"
      ],
      [
        ".aa { float: left; margin: 0px 14px 4px 41px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 40px 40px 41px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }.ab { max-width: 100px; width: 100px; }.aa:active { color: yellow; }.aa::before { background-color: yellow; content: \"a\"; width: 100px; }"
      ]
    ]);
  });

  to('all values', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      window.document.body.dir = 'rtl';

      const onesyStyle = new window.OnesyStyle.OnesyStyle(window.document.body, undefined, undefined, { rule: { prefix: true } });

      // Plugins
      onesyStyle.plugins.add = [
        window.OnesyStyle.unit,
        window.OnesyStyle.sort,
        window.OnesyStyle.prefix,
        window.OnesyStyle.makeClassName,
        window.OnesyStyle.valueObject,
        window.OnesyStyle.rtl,
      ];

      const subs = {
        background: new window.OnesySubscription('beige'),
        media: new window.OnesySubscription('yellow'),
        var: new window.OnesySubscription({
          width: 100,

          'max-width': 100,

          // Simple
          background: '#faa',

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        }),
      };

      const a = theme => ({
        '@keyframes a': {
          '0%': {
            color: 'white',
          },
          '40%': {
            color: 'yellow',
          },
        },

        body: {
          '@pure': true,
          margin: 40,

          '& $a': {
            color: 'yellow'
          }
        },

        main: {
          '@p': true,
          margin: 40,
        },

        area: {
          '@pure': true,

          color: subs.background,

          '& $a': {
            color: 'yellow'
          }
        },

        '@pure': {
          a: {
            margin: 4,
          },

          meta: {
            margin: props => props.a === 1 ? 114 : 1114,
          },
        },

        a: {
          width: 100,

          'max-width': 100,

          // Simple
          background: theme.palette.color.primary.main,

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        },

        // options at rule level
        a1: {
          '@options': {
            prefix: false,
            sort: false,
            rtl: false,
          },

          // Keyframes nested
          '@keyframes a1': {
            '0%': {
              color: 'lightgreen',
            },
            '40%': {
              color: 'orange',
            },
          },

          width: '100%',

          maxWidth: 100,

          margin: [0, 14, 4, 40],

          // Array of arrays
          background: ['#faa', 'url("a.jpg")', 'no-repeat', 'right', 'top'],

          animationName: '$a1',
          animationDuration: 1.4,

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',
        },

        // with classNames
        a2: {
          '@classNames': ['ad', 'ad', 'ad1', 'ad4', true && 'a', false && 'b', 0, 14, '114', { 'c': false, d: true, e: { u: true } }],

          margin: [0, 14, '4em'],

          // Array of arrays
          background: [
            ['url("a.jpg")', 'no-repeat', 'right', 'top'],
            ['url("ad.jpg")', 'no-repeat', 'right', 'top'],
            ['url("ad.jpg")', 'no-repeat', 'right', 'top']
          ],

          // animation with non-existing keyframes
          animation: '$a14 .4s ease',
        },

        a3: {
          // Array of objects
          background: [
            { image: 'url("a.jpg")', repeat: 'no-repeat', position: 'center right' },
            { image: 'url("a.jpg")', repeat: 'repeat-y', position: 'center center' },
            { image: 'url("ad.jpg")', repeat: 'repeat-y', position: 'center' },
          ],

          // animationName with non-existing keyframes
          animationName: '$a114',
        },

        a4: {
          // Object
          background: {
            value: '#faa',
            // In order of specificity they will actually be used at
            fallbacks: [
              '#faa',
              ['#fff', 'url("a.jpg")', 'no-repeat', 'right', 'top'],
              [
                ['url("a.jpg")', 'no-repeat', 'right', 'top'],
                ['url("a.jpg")', 'no-repeat', 'right', 'top'],
                ['url("ad.jpg")', 'no-repeat', 'right', 'top']
              ]
            ]
          }
        },

        a5: {
          // Object
          background: {
            // Multi version value
            value: [
              ['url("a.jpg")', 'no-repeat', 'right', 'top'],
              ['url("a1.jpg")', 'no-repeat', 'right', 'top'],
              ['url("ad.jpg")', 'no-repeat', 'right', 'top']
            ],
            // In order of specificity they will actually be used at
            fallbacks: [
              '#faa',
              ['#fff', 'url("a.jpg")', 'no-repeat', 'right', 'top'],
              [
                ['url("a.jpg")', 'no-repeat', 'right', 'top'],
                ['url("a.jpg")', 'no-repeat', 'right', 'top'],
                ['url("ad.jpg")', 'no-repeat', 'right', 'top']
              ]
            ]
          }
        },

        a6: {
          // Object with expanded props
          background: {
            color: 'orange',
            image: 'url("a.jpg")',
            repeat: 'repeat-y',
            position: 'center center',
          },
        },

        a7: {
          // Function
          background: props => props.a === 1 ? 'yellow' : 'orange',
        },

        a8: {
          // OnesySubscription
          background: subs.background,
        },

        // Additionaly nested
        a9: {
          color: 'yellow',

          '& .a19': {
            color: 'white',

            '& > a': {
              color: 'yellow',

              '&:active': {
                color: 'orange',

                // rtl
                marginLeft: 40,
                float: 'left',

                // sort
                padding: 40,
                paddingLeft: 41,

                // prefixes
                position: 'sticky',
                transition: 'all .4s ease',
                maskOrigin: 'margin-box',
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                maskPosition: '40% 74%',
              }

            }

          },

        },

        // Reference class name
        // and empty rules and options nested
        a10: {

          '& $a1': {

            '& > a': {

              '&:active': {
                '@options': {
                  prefix: false,
                  sort: false,
                  rtl: false,
                },

                color: 'orange',

                // rtl
                marginLeft: 40,
                float: 'left',

                // sort
                paddingLeft: 41,
                padding: 40,

                // prefixes
                position: 'sticky',
                transition: 'all .4s ease',
                maskOrigin: 'margin-box',
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                maskPosition: '40% 74%',
              }

            }

          },

          // Multiple refs
          '& $a1 $a4$a7': {
            color: 'yellow'
          },

        },

        // Reference of non-existing refs
        // + reuse of a10 as it has the same hash
        a11: {

          '& $ad $a114': {
            color: 'white',
          },

        },

        // Reference multiple
        a12: {

          '& $a4& &': {
            color: 'white',
          },

        },

        // Empty rules
        // Ought not to be added as it's not dynamic, and it has empty rules
        a13: {

        },

        aa: `
      width: 100;
      maxWidth: 100%;
      background: orange;

      marginLeft: 41;
      float: left;

      paddingRight: 41;
      padding: 40px;
   `,

        ad: props => props.a === 1 ? {
          width: 100,

          'max-width': 100,

          // Simple
          background: '#faa',

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingRight: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        } : {
          width: 100,

          'max-width': 100,

          // Simple
          background: 'orange',

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',

          '& $a1': {
            color: 'yellow'
          }
        },

        ad1: subs.var,

        // @Media

        // Empty
        '@media only screen and (min-width: 1401px)': {

        },

        '@media only screen and (min-width: 1404px)': {
          $a: {
            color: 'beige',
          },

          $var: {
            color: 'yellow',
          },
        },

        '@media only screen and (max-width: 1414px)': {
          // element
          body: {
            margin: 40,
            background: 'beige',

            '& $a': {
              color: 'yellow'
            }
          },

          main: {
            margin: 40,
          },

          area: {
            color: subs.background,

            '& $a': {
              color: 'yellow'
            }
          },

          a: {
            margin: 4,
          },

          meta: {
            margin: props => props.a === 1 ? 114 : 1114,
          },

          $a: {
            width: 100,

            'max-width': 100,

            // Simple
            background: theme.palette.color.primary.main,

            margin: '0 14px 4px 40px',

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingLeft: 41,
            padding: 40,

            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskOrigin: 'inherit',
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
            maskPosition: '40% 74%',

            // animation
            animation: '$a .4s ease',
          },

          // options at rule level
          $a1: {
            '@options': {
              prefix: false,
              sort: false,
              rtl: false,
            },

            // Keyframes nested
            '@keyframes a1': {
              '0%': {
                color: 'lightgreen',
              },
              '40%': {
                color: 'orange',
              },
            },

            width: '100%',

            maxWidth: 100,

            margin: [0, 14, 4, 40],

            // Array of arrays
            background: ['#faa', 'url("a.jpg")', 'no-repeat', 'right', 'top'],

            animationName: '$a1',
            animationDuration: 1.4,

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingLeft: 41,
            padding: 40,

            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskOrigin: 'inherit',
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
            maskPosition: '40% 74%',
          },

          $a7: {
            // Function
            background: props => props.a === 1 ? 'azure' : 'aliceblue',
          },

          $a8: {
            // OnesySubscription
            background: subs.media,
          },

          // Additionaly nested
          $a9: {
            color: 'yellow',

            '& .a19': {
              color: 'white',

              '& > a': {
                color: 'yellow',

                '&:active': {
                  color: 'orange',

                  // rtl
                  marginLeft: 40,
                  float: 'left',

                  // sort
                  paddingLeft: 41,
                  padding: 40,

                  // prefixes
                  position: 'sticky',
                  transition: 'all .4s ease',
                  maskOrigin: 'inherit',
                  maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                  maskPosition: '40% 74%',
                }

              }

            },

          },

          // Reference class name
          // and empty rules and with options nested
          $a10: {

            '& $a1': {

              '& > a': {

                '&:active': {
                  '@options': {
                    prefix: false,
                    sort: false,
                    rtl: false,
                  },

                  color: 'orange',

                  // rtl
                  marginLeft: 40,
                  float: 'left',

                  // sort
                  paddingLeft: 41,
                  padding: 40,

                  // prefixes
                  position: 'sticky',
                  transition: 'all .4s ease',
                  maskOrigin: 'margin-box',
                  maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                  maskPosition: '40% 74%',
                }

              }

            },

            // Multiple refs
            '& $a1 $a4$a7': {
              color: 'yellow'
            },

          },

          // Reference of non-existing refs
          // + reuse of a10 as it has the same hash
          $a11: {

            '& $ad $a114': {
              color: 'white',
            },

          },

          // Reference multiple
          $a12: {

            '& $a4& &': {
              color: 'white',
            },

          },

          // Empty rules
          // Ought not to be added as it's not dynamic, and it has empty rules
          $a13: {

          },

          $ad: props => props.a === 1 ? {
            width: 100,

            'max-width': 100,

            // Simple
            background: '#faa',

            margin: '0 14px 4px 40px',

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingRight: 41,
            padding: 40,

            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskOrigin: 'inherit',
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
            maskPosition: '40% 74%',

            // animation
            animation: '$a .4s ease',
          } : {
            width: 100,

            'max-width': 100,

            // Simple
            background: 'orange',

            margin: '0 14px 4px 40px',

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingLeft: 41,
            padding: 40,

            // prefixes
            transition: 'all .4s ease',
            maskComposite: 'inherit',

            // animation
            animation: '$a .4s ease',
          },

          $ad1: subs.var,

          // @media nested
          '@media print': {
            // element
            body: {
              background: 'beige',
            },

            $a: {
              width: 100,

              'max-width': 100,

              // Simple
              background: '#faa',

              margin: '0 14px 4px 40px',

              // rtl
              marginLeft: 41,
              float: 'left',

              // sort
              paddingLeft: 41,
              padding: 40,

              // prefixes
              position: 'sticky',
              transition: 'all .4s ease',
              maskOrigin: 'inherit',
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
              maskPosition: '40% 74%',

              // animation
              animation: '$a .4s ease',
            },

            // options at rule level
            $a1: {
              '@options': {
                prefix: false,
                sort: false,
                rtl: false,
              },

              // Keyframes nested
              '@keyframes a1': {
                '0%': {
                  color: 'lightgreen',
                },
                '40%': {
                  color: 'orange',
                },
              },

              width: '100%',

              maxWidth: 100,

              margin: [0, 14, 4, 40],

              // Array of arrays
              background: ['#faa', 'url("a.jpg")', 'no-repeat', 'right', 'top'],

              animationName: '$a1',
              animationDuration: 1.4,

              // rtl
              marginLeft: 41,
              float: 'left',

              // sort
              paddingLeft: 41,
              padding: 40,

              // prefixes
              position: 'sticky',
              transition: 'all .4s ease',
              maskOrigin: 'inherit',
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
              maskPosition: '40% 74%',
            },

            $a7: {
              // Function
              background: props => props.a === 1 ? 'azure' : 'aliceblue',
            },

            $a8: {
              // OnesySubscription
              background: subs.media,
            },

            // Additionaly nested
            $a9: {
              color: 'yellow',

              '& .a19': {
                color: 'white',

                '& > a': {
                  color: 'yellow',

                  '&:active': {
                    color: 'orange',

                    // rtl
                    marginLeft: 40,
                    float: 'left',

                    // sort
                    paddingLeft: 41,
                    padding: 40,

                    // prefixes
                    position: 'sticky',
                    transition: 'all .4s ease',
                    maskOrigin: 'inherit',
                    maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                    maskPosition: '40% 74%',
                  }

                }

              },

            },

            // Reference class name
            // and empty rules and with options nested
            $a10: {

              '& $a1': {

                '& > a': {

                  '&:active': {
                    '@options': {
                      prefix: false,
                      sort: false,
                      rtl: false,
                    },

                    color: 'orange',

                    // rtl
                    marginLeft: 40,
                    float: 'left',

                    // sort
                    paddingLeft: 41,
                    padding: 40,

                    // prefixes
                    position: 'sticky',
                    transition: 'all .4s ease',
                    maskOrigin: 'margin-box',
                    maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                    maskPosition: '40% 74%',
                  }

                }

              },

              // Multiple refs
              '& $a1 $a4$a7': {
                color: 'yellow'
              },

            },

            // Reference of non-existing refs
            // + reuse of a10 as it has the same hash
            $a11: {

              '& $ad $a114': {
                color: 'white',
              },

            },

            // Reference multiple
            $a12: {

              '& $a4& &': {
                color: 'white',
              },

            },

            // Empty rules
            // Ought not to be added as it's not dynamic, and it has empty rules
            $a13: {

            },

            $ad: props => props.a === 1 ? {
              width: 100,

              'max-width': 100,

              // Simple
              background: '#faa',

              margin: '0 14px 4px 40px',

              // rtl
              marginLeft: 41,
              float: 'left',

              // sort
              paddingRight: 41,
              padding: 40,

              // prefixes
              position: 'sticky',
              transition: 'all .4s ease',
              maskOrigin: 'inherit',
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
              maskPosition: '40% 74%',

              // animation
              animation: '$a .4s ease',
            } : {
              width: 100,

              'max-width': 100,

              // Simple
              background: 'orange',

              margin: '0 14px 4px 40px',

              // rtl
              marginLeft: 41,
              float: 'left',

              // sort
              paddingLeft: 41,
              padding: 40,

              // prefixes
              position: 'sticky',
              transition: 'all .4s ease',
              maskComposite: 'inherit',

              // animation
              animation: '$a .4s ease',
            },

            $ad1: subs.var,
          },

        },

        a40: {
          color: 'beige',
          padding: 41,

          '@media only screen and (min-width: 1404px)': {
            '&': {
              color: 'orange',
            },
          }
        }

      });

      const onesyTheme = new window.OnesyStyle.OnesyTheme({}, window.document.body, { rule: { prefix: true } });

      const style = window.OnesyStyle.style(a, { onesy_style: { value: onesyStyle }, onesy_theme: { value: onesyTheme } });

      // Add
      style.add();

      let css = '';

      Array.from(window.document.styleSheets).forEach((sheet: any) => {
        Array.from(sheet.cssRules).forEach((rule: any) => {
          css += `\n\n${rule.cssText}`;
        });
      });

      const response = [
        css
      ];

      return response;
    });

    const onesyStyle = new OnesyStyle.OnesyStyle({ optimize: true });

    // Plugins
    onesyStyle.plugins.add = [
      OnesyStyle.unit,
      OnesyStyle.sort,
      OnesyStyle.prefix,
      OnesyStyle.makeClassName,
      OnesyStyle.valueObject,
      OnesyStyle.rtl,
    ];

    const subs = {
      background: new OnesySubscription('beige'),
      media: new OnesySubscription('yellow'),
      var: new OnesySubscription({
        width: 100,

        'max-width': 100,

        // Simple
        background: '#faa',

        margin: '0 14px 4px 40px',

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',
      }),
    };

    const a = theme => ({
      '@keyframes a': {
        '0%': {
          color: 'white',
        },
        '40%': {
          color: 'yellow',
        },
      },

      body: {
        '@pure': true,
        margin: 40,

        '& $a': {
          color: 'yellow'
        }
      },

      main: {
        '@p': true,
        margin: 40,
      },

      area: {
        '@pure': true,

        color: subs.background,

        '& $a': {
          color: 'yellow'
        }
      },

      '@pure': {
        a: {
          margin: 4,
        },

        meta: {
          margin: props => props.a === 1 ? 114 : 1114,
        },
      },

      a: {
        width: 100,

        'max-width': 100,

        // Simple
        background: theme.palette.color.primary.main,

        margin: '0 14px 4px 40px',

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',
      },

      // options at rule level
      a1: {
        '@options': {
          prefix: false,
          sort: false,
          rtl: false,
        },

        // Keyframes nested
        '@keyframes a1': {
          '0%': {
            color: 'lightgreen',
          },
          '40%': {
            color: 'orange',
          },
        },

        width: '100%',

        maxWidth: 100,

        margin: [0, 14, 4, 40],

        // Array of arrays
        background: ['#faa', 'url("a.jpg")', 'no-repeat', 'right', 'top'],

        animationName: '$a1',
        animationDuration: 1.4,

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',
      },

      // with classNames
      a2: {
        '@classNames': ['ad', 'ad', 'ad1', 'ad4', true && 'a', false && 'b', 0, 14, '114', { 'c': false, d: true, e: { u: true } }],

        margin: [0, 14, '4em'],

        // Array of arrays
        background: [
          ['url("a.jpg")', 'no-repeat', 'right', 'top'],
          ['url("ad.jpg")', 'no-repeat', 'right', 'top'],
          ['url("ad.jpg")', 'no-repeat', 'right', 'top']
        ],

        // animation with non-existing keyframes
        animation: '$a14 .4s ease',
      },

      a3: {
        // Array of objects
        background: [
          { image: 'url("a.jpg")', repeat: 'no-repeat', position: 'center right' },
          { image: 'url("a.jpg")', repeat: 'repeat-y', position: 'center center' },
          { image: 'url("ad.jpg")', repeat: 'repeat-y', position: 'center' },
        ],

        // animationName with non-existing keyframes
        animationName: '$a114',
      },

      a4: {
        // Object
        background: {
          value: '#faa',
          // In order of specificity they will actually be used at
          fallbacks: [
            '#faa',
            ['#fff', 'url("a.jpg")', 'no-repeat', 'right', 'top'],
            [
              ['url("a.jpg")', 'no-repeat', 'right', 'top'],
              ['url("a.jpg")', 'no-repeat', 'right', 'top'],
              ['url("ad.jpg")', 'no-repeat', 'right', 'top']
            ]
          ]
        }
      },

      a5: {
        // Object
        background: {
          // Multi version value
          value: [
            ['url("a.jpg")', 'no-repeat', 'right', 'top'],
            ['url("a1.jpg")', 'no-repeat', 'right', 'top'],
            ['url("ad.jpg")', 'no-repeat', 'right', 'top']
          ],
          // In order of specificity they will actually be used at
          fallbacks: [
            '#faa',
            ['#fff', 'url("a.jpg")', 'no-repeat', 'right', 'top'],
            [
              ['url("a.jpg")', 'no-repeat', 'right', 'top'],
              ['url("a.jpg")', 'no-repeat', 'right', 'top'],
              ['url("ad.jpg")', 'no-repeat', 'right', 'top']
            ]
          ]
        }
      },

      a6: {
        // Object with expanded props
        background: {
          color: 'orange',
          image: 'url("a.jpg")',
          repeat: 'repeat-y',
          position: 'center center',
        },
      },

      a7: {
        // Function
        background: props => props.a === 1 ? 'yellow' : 'orange',
      },

      a8: {
        // OnesySubscription
        background: subs.background,
      },

      // Additionaly nested
      a9: {
        color: 'yellow',

        '& .a19': {
          color: 'white',

          '& > a': {
            color: 'yellow',

            '&:active': {
              color: 'orange',

              // rtl
              marginLeft: 40,
              float: 'left',

              // sort
              padding: 40,
              paddingLeft: 41,

              // prefixes
              position: 'sticky',
              transition: 'all .4s ease',
              maskOrigin: 'margin-box',
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
              maskPosition: '40% 74%',
            }

          }

        },

      },

      // Reference class name
      // and empty rules and options nested
      a10: {

        '& $a1': {

          '& > a': {

            '&:active': {
              '@options': {
                prefix: false,
                sort: false,
                rtl: false,
              },

              color: 'orange',

              // rtl
              marginLeft: 40,
              float: 'left',

              // sort
              paddingLeft: 41,
              padding: 40,

              // prefixes
              position: 'sticky',
              transition: 'all .4s ease',
              maskOrigin: 'margin-box',
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
              maskPosition: '40% 74%',
            }

          }

        },

        // Multiple refs
        '& $a1 $a4$a7': {
          color: 'yellow'
        },

      },

      // Reference of non-existing refs
      // + reuse of a10 as it has the same hash
      a11: {

        '& $ad $a114': {
          color: 'white',
        },

      },

      // Reference multiple
      a12: {

        '& $a4& &': {
          color: 'white',
        },

      },

      // Empty rules
      // Ought not to be added as it's not dynamic, and it has empty rules
      a13: {

      },

      aa: `
      width: 100;
      maxWidth: 100%;
      background: orange;

      marginLeft: 41;
      float: left;
      paddingRight: 41;
      padding: 40px;
   `,

      ad: props => props.a === 1 ? {
        width: 100,

        'max-width': 100,

        // Simple
        background: '#faa',

        margin: '0 14px 4px 40px',

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingRight: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',
      } : {
        width: 100,

        'max-width': 100,

        // Simple
        background: 'orange',

        margin: '0 14px 4px 40px',

        // rtl
        marginLeft: 41,
        float: 'left',

        // sort
        paddingLeft: 41,
        padding: 40,

        // prefixes
        position: 'sticky',
        transition: 'all .4s ease',
        maskOrigin: 'inherit',
        maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
        maskPosition: '40% 74%',

        // animation
        animation: '$a .4s ease',

        '& $a1': {
          color: 'yellow'
        }
      },

      ad1: subs.var,

      // @Media

      // Empty
      '@media only screen and (min-width: 1401px)': {

      },

      '@media only screen and (min-width: 1404px)': {
        $a: {
          color: 'beige',
        },

        $var: {
          color: 'yellow',
        },
      },

      '@media only screen and (max-width: 1414px)': {
        // element
        body: {
          margin: 40,
          background: 'beige',

          '& $a': {
            color: 'yellow'
          }
        },

        main: {
          margin: 40,
        },

        area: {
          color: subs.background,

          '& $a': {
            color: 'yellow'
          }
        },

        a: {
          margin: 4,
        },

        meta: {
          margin: props => props.a === 1 ? 114 : 1114,
        },

        $a: {
          width: 100,

          'max-width': 100,

          // Simple
          background: theme.palette.color.primary.main,

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        },

        // options at rule level
        $a1: {
          '@options': {
            prefix: false,
            sort: false,
            rtl: false,
          },

          // Keyframes nested
          '@keyframes a1': {
            '0%': {
              color: 'lightgreen',
            },
            '40%': {
              color: 'orange',
            },
          },

          width: '100%',

          maxWidth: 100,

          margin: [0, 14, 4, 40],

          // Array of arrays
          background: ['#faa', 'url("a.jpg")', 'no-repeat', 'right', 'top'],

          animationName: '$a1',
          animationDuration: 1.4,

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',
        },

        $a7: {
          // Function
          background: props => props.a === 1 ? 'azure' : 'aliceblue',
        },

        $a8: {
          // OnesySubscription
          background: subs.media,
        },

        // Additionaly nested
        $a9: {
          color: 'yellow',

          '& .a19': {
            color: 'white',

            '& > a': {
              color: 'yellow',

              '&:active': {
                color: 'orange',

                // rtl
                marginLeft: 40,
                float: 'left',

                // sort
                paddingLeft: 41,
                padding: 40,

                // prefixes
                position: 'sticky',
                transition: 'all .4s ease',
                maskOrigin: 'inherit',
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                maskPosition: '40% 74%',
              }

            }

          },

        },

        // Reference class name
        // and empty rules and with options nested
        $a10: {

          '& $a1': {

            '& > a': {

              '&:active': {
                '@options': {
                  prefix: false,
                  sort: false,
                  rtl: false,
                },

                color: 'orange',

                // rtl
                marginLeft: 40,
                float: 'left',

                // sort
                paddingLeft: 41,
                padding: 40,

                // prefixes
                position: 'sticky',
                transition: 'all .4s ease',
                maskOrigin: 'margin-box',
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                maskPosition: '40% 74%',
              }

            }

          },

          // Multiple refs
          '& $a1 $a4$a7': {
            color: 'yellow'
          },

        },

        // Reference of non-existing refs
        // + reuse of a10 as it has the same hash
        $a11: {

          '& $ad $a114': {
            color: 'white',
          },

        },

        // Reference multiple
        $a12: {

          '& $a4& &': {
            color: 'white',
          },

        },

        // Empty rules
        // Ought not to be added as it's not dynamic, and it has empty rules
        $a13: {

        },

        $ad: props => props.a === 1 ? {
          width: 100,

          'max-width': 100,

          // Simple
          background: '#faa',

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingRight: 41,
          padding: 40,

          // prefixes
          position: 'sticky',
          transition: 'all .4s ease',
          maskOrigin: 'inherit',
          maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
          maskPosition: '40% 74%',

          // animation
          animation: '$a .4s ease',
        } : {
          width: 100,

          'max-width': 100,

          // Simple
          background: 'orange',

          margin: '0 14px 4px 40px',

          // rtl
          marginLeft: 41,
          float: 'left',

          // sort
          paddingLeft: 41,
          padding: 40,

          // prefixes
          transition: 'all .4s ease',
          maskComposite: 'inherit',

          // animation
          animation: '$a .4s ease',
        },

        $ad1: subs.var,

        // @media nested
        '@media print': {
          // element
          body: {
            background: 'beige',
          },

          $a: {
            width: 100,

            'max-width': 100,

            // Simple
            background: '#faa',

            margin: '0 14px 4px 40px',

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingLeft: 41,
            padding: 40,

            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskOrigin: 'inherit',
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
            maskPosition: '40% 74%',

            // animation
            animation: '$a .4s ease',
          },

          // options at rule level
          $a1: {
            '@options': {
              prefix: false,
              sort: false,
              rtl: false,
            },

            // Keyframes nested
            '@keyframes a1': {
              '0%': {
                color: 'lightgreen',
              },
              '40%': {
                color: 'orange',
              },
            },

            width: '100%',

            maxWidth: 100,

            margin: [0, 14, 4, 40],

            // Array of arrays
            background: ['#faa', 'url("a.jpg")', 'no-repeat', 'right', 'top'],

            animationName: '$a1',
            animationDuration: 1.4,

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingLeft: 41,
            padding: 40,

            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskOrigin: 'inherit',
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
            maskPosition: '40% 74%',
          },

          $a7: {
            // Function
            background: props => props.a === 1 ? 'azure' : 'aliceblue',
          },

          $a8: {
            // OnesySubscription
            background: subs.media,
          },

          // Additionaly nested
          $a9: {
            color: 'yellow',

            '& .a19': {
              color: 'white',

              '& > a': {
                color: 'yellow',

                '&:active': {
                  color: 'orange',

                  // rtl
                  marginLeft: 40,
                  float: 'left',

                  // sort
                  paddingLeft: 41,
                  padding: 40,

                  // prefixes
                  position: 'sticky',
                  transition: 'all .4s ease',
                  maskOrigin: 'inherit',
                  maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                  maskPosition: '40% 74%',
                }

              }

            },

          },

          // Reference class name
          // and empty rules and with options nested
          $a10: {

            '& $a1': {

              '& > a': {

                '&:active': {
                  '@options': {
                    prefix: false,
                    sort: false,
                    rtl: false,
                  },

                  color: 'orange',

                  // rtl
                  marginLeft: 40,
                  float: 'left',

                  // sort
                  paddingLeft: 41,
                  padding: 40,

                  // prefixes
                  position: 'sticky',
                  transition: 'all .4s ease',
                  maskOrigin: 'margin-box',
                  maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
                  maskPosition: '40% 74%',
                }

              }

            },

            // Multiple refs
            '& $a1 $a4$a7': {
              color: 'yellow'
            },

          },

          // Reference of non-existing refs
          // + reuse of a10 as it has the same hash
          $a11: {

            '& $ad $a114': {
              color: 'white',
            },

          },

          // Reference multiple
          $a12: {

            '& $a4& &': {
              color: 'white',
            },

          },

          // Empty rules
          // Ought not to be added as it's not dynamic, and it has empty rules
          $a13: {

          },

          $ad: props => props.a === 1 ? {
            width: 100,

            'max-width': 100,

            // Simple
            background: '#faa',

            margin: '0 14px 4px 40px',

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingRight: 41,
            padding: 40,

            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskOrigin: 'inherit',
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
            maskPosition: '40% 74%',

            // animation
            animation: '$a .4s ease',
          } : {
            width: 100,

            'max-width': 100,

            // Simple
            background: 'orange',

            margin: '0 14px 4px 40px',

            // rtl
            marginLeft: 41,
            float: 'left',

            // sort
            paddingLeft: 41,
            padding: 40,

            // prefixes
            position: 'sticky',
            transition: 'all .4s ease',
            maskComposite: 'inherit',

            // animation
            animation: '$a .4s ease',
          },

          $ad1: subs.var,
        },

      },

      a40: {
        color: 'beige',
        padding: 41,

        '@media only screen and (min-width: 1404px)': {
          '&': {
            color: 'orange',
          },
        }
      }

    });

    const onesyTheme = new OnesyStyle.OnesyTheme();

    const style = OnesyStyle.style(a, { onesy_style: { value: onesyStyle }, onesy_theme: { value: onesyTheme } });

    // Add
    style.add();

    const response = [
      style.onesy_style_sheet_manager.css
    ];

    const valueNode = response;

    const values = [valueNode, ...valueBrowsers];

    assert(values).eql([
      [
        "\n\nmain {\n  margin: 40px;\n}\n\nbody {\n  margin: 40px;\n}\n\na {\n  margin: 4px;\n}\n\n@keyframes a-0 {\n  0% {\n    color: white;\n  }\n\n  40% {\n    color: yellow;\n  }\n}\n\n.a-0 {\n  animation: a-0 .4s ease;\n  background: #FFEB3B;\n  float: left;\n  margin: 0 14px 4px 40px;\n  margin-left: 41px;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n  mask-origin: inherit;\n  mask-position: 40% 74%;\n  max-width: 100px;\n  padding: 40px;\n  padding-left: 41px;\n  position: sticky;\n  transition: all .4s ease;\n  width: 100px;\n}\n\n.a1-1 {\n  width: 100%;\n  max-width: 100px;\n  margin: 0px 14px 4px 40px;\n  background: #faa url(\"a.jpg\") no-repeat right top;\n  animation-duration: 1.4s;\n  margin-left: 41px;\n  float: left;\n  padding-left: 41px;\n  padding: 40px;\n  position: sticky;\n  transition: all .4s ease;\n  mask-origin: inherit;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n  mask-position: 40% 74%;\n}\n\n.a2-2 {\n  background: url(\"a.jpg\") no-repeat right top, url(\"ad.jpg\") no-repeat right top, url(\"ad.jpg\") no-repeat right top;\n  margin: 0px 14px 4em;\n}\n\n.a3-3 {\n  background: url(\"a.jpg\") no-repeat center right, url(\"a.jpg\") repeat-y center center, url(\"ad.jpg\") repeat-y center;\n}\n\n.a4-4 {\n  background: #faa;\n  background: #fff url(\"a.jpg\") no-repeat right top;\n  background: url(\"a.jpg\") no-repeat right top, url(\"a.jpg\") no-repeat right top, url(\"ad.jpg\") no-repeat right top;\n  background: #faa;\n}\n\n.a5-5 {\n  background: #faa;\n  background: #fff url(\"a.jpg\") no-repeat right top;\n  background: url(\"a.jpg\") no-repeat right top, url(\"a.jpg\") no-repeat right top, url(\"ad.jpg\") no-repeat right top;\n  background: url(\"a.jpg\") no-repeat right top, url(\"a1.jpg\") no-repeat right top, url(\"ad.jpg\") no-repeat right top;\n}\n\n.a6-6 {\n  background: orange url(\"a.jpg\") repeat-y center center;\n}\n\n.a9-7 {\n  color: yellow;\n}\n\n.aa-11 {\n  background: orange;\n  float: left;\n  margin-left: 41px;\n  max-width: 100%;\n  padding: 40px;\n  padding-right: 41px;\n  width: 100px;\n}\n\n@media only screen and (min-width: 1404px) {\n  .a-0 {\n    color: beige;\n  }\n\n  .var-12 {\n    color: yellow;\n  }\n}\n\n.a40-13 {\n  color: beige;\n  padding: 41px;\n}\n\n@keyframes a1-1 {\n  0% {\n    color: lightgreen;\n  }\n\n  40% {\n    color: orange;\n  }\n}\n\n.a9-7 .a19 {\n  color: white;\n}\n\n.a10-8 .a1-1 .a4-4.a7-14 {\n  color: yellow;\n}\n\n.a11-9 .ad-15 .a114-16 {\n  color: white;\n}\n\n.a11-9 .a4-4.a11-9 .a11-9 {\n  color: white;\n}\n\n@media only screen and (min-width: 1404px) {\n  .a40-13 {\n    color: orange;\n  }\n}\n\nbody .a-0 {\n  color: yellow;\n}\n\n.a9-7 .a19 > a {\n  color: yellow;\n}\n\n.a9-7 .a19 > a:active {\n  color: orange;\n  float: left;\n  margin-left: 40px;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n  mask-origin: margin-box;\n  mask-position: 40% 74%;\n  padding: 40px;\n  padding-left: 41px;\n  position: sticky;\n  transition: all .4s ease;\n}\n\n.a10-8 .a1-1 > a:active {\n  color: orange;\n  margin-left: 40px;\n  float: left;\n  padding-left: 41px;\n  padding: 40px;\n  position: sticky;\n  transition: all .4s ease;\n  mask-origin: margin-box;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n  mask-position: 40% 74%;\n}\n\n\n\narea {\n  color: beige;\n}\n\nmeta {\n  margin: 1114px;\n}\n\n.a7-14 {\n  background: orange;\n}\n\n.a8-17 {\n  background: beige;\n}\n\n.ad-15 {\n  animation: a-0 .4s ease;\n  background: orange;\n  float: left;\n  margin: 0 14px 4px 40px;\n  margin-left: 41px;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n  mask-origin: inherit;\n  mask-position: 40% 74%;\n  max-width: 100px;\n  padding: 40px;\n  padding-left: 41px;\n  position: sticky;\n  transition: all .4s ease;\n  width: 100px;\n}\n\n.ad1-18 {\n  animation: a-0 .4s ease;\n  background: #faa;\n  float: left;\n  margin: 0 14px 4px 40px;\n  margin-left: 41px;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n  mask-origin: inherit;\n  mask-position: 40% 74%;\n  max-width: 100px;\n  padding: 40px;\n  padding-left: 41px;\n  position: sticky;\n  transition: all .4s ease;\n  width: 100px;\n}\n\n@media only screen and (max-width: 1414px) {\n  body {\n    background: beige;\n    margin: 40px;\n  }\n\n  main {\n    margin: 40px;\n  }\n\n  area {\n    color: beige;\n  }\n\n  a {\n    margin: 4px;\n  }\n\n  meta {\n    margin: 1114px;\n  }\n\n  .a-0 {\n    animation: a-0 .4s ease;\n    background: #FFEB3B;\n    float: left;\n    margin: 0 14px 4px 40px;\n    margin-left: 41px;\n    mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n    mask-origin: inherit;\n    mask-position: 40% 74%;\n    max-width: 100px;\n    padding: 40px;\n    padding-left: 41px;\n    position: sticky;\n    transition: all .4s ease;\n    width: 100px;\n  }\n\n  .a1-1 {\n    width: 100%;\n    max-width: 100px;\n    margin: 0px 14px 4px 40px;\n    background: #faa url(\"a.jpg\") no-repeat right top;\n    animation-name: a1-1;\n    animation-duration: 1.4s;\n    margin-left: 41px;\n    float: left;\n    padding-left: 41px;\n    padding: 40px;\n    position: sticky;\n    transition: all .4s ease;\n    mask-origin: inherit;\n    mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n    mask-position: 40% 74%;\n  }\n\n  .a7-14 {\n    background: aliceblue;\n  }\n\n  .a8-19 {\n    background: yellow;\n  }\n\n  .a9-7 {\n    color: yellow;\n  }\n\n  .ad-15 {\n    animation: a-0 .4s ease;\n    background: orange;\n    float: left;\n    margin: 0 14px 4px 40px;\n    margin-left: 41px;\n    mask-composite: inherit;\n    max-width: 100px;\n    padding: 40px;\n    padding-left: 41px;\n    transition: all .4s ease;\n    width: 100px;\n  }\n\n  .ad1-20 {\n    animation: a-0 .4s ease;\n    background: #faa;\n    float: left;\n    margin: 0 14px 4px 40px;\n    margin-left: 41px;\n    mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n    mask-origin: inherit;\n    mask-position: 40% 74%;\n    max-width: 100px;\n    padding: 40px;\n    padding-left: 41px;\n    position: sticky;\n    transition: all .4s ease;\n    width: 100px;\n  }\n\n  @media print {\n    body {\n      background: beige;\n    }\n\n    .a-0 {\n      animation: a-0 .4s ease;\n      background: #faa;\n      float: left;\n      margin: 0 14px 4px 40px;\n      margin-left: 41px;\n      mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n      mask-origin: inherit;\n      mask-position: 40% 74%;\n      max-width: 100px;\n      padding: 40px;\n      padding-left: 41px;\n      position: sticky;\n      transition: all .4s ease;\n      width: 100px;\n    }\n\n    .a1-1 {\n      width: 100%;\n      max-width: 100px;\n      margin: 0px 14px 4px 40px;\n      background: #faa url(\"a.jpg\") no-repeat right top;\n      animation-name: a1-1;\n      animation-duration: 1.4s;\n      margin-left: 41px;\n      float: left;\n      padding-left: 41px;\n      padding: 40px;\n      position: sticky;\n      transition: all .4s ease;\n      mask-origin: inherit;\n      mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n      mask-position: 40% 74%;\n    }\n\n    .a7-14 {\n      background: aliceblue;\n    }\n\n    .a8-21 {\n      background: yellow;\n    }\n\n    .a9-7 {\n      color: yellow;\n    }\n\n    .ad-15 {\n      animation: a-0 .4s ease;\n      background: orange;\n      float: left;\n      margin: 0 14px 4px 40px;\n      margin-left: 41px;\n      mask-composite: inherit;\n      max-width: 100px;\n      padding: 40px;\n      padding-left: 41px;\n      position: sticky;\n      transition: all .4s ease;\n      width: 100px;\n    }\n\n    .ad1-22 {\n      animation: a-0 .4s ease;\n      background: #faa;\n      float: left;\n      margin: 0 14px 4px 40px;\n      margin-left: 41px;\n      mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n      mask-origin: inherit;\n      mask-position: 40% 74%;\n      max-width: 100px;\n      padding: 40px;\n      padding-left: 41px;\n      position: sticky;\n      transition: all .4s ease;\n      width: 100px;\n    }\n\n    .a9-7 .a19 {\n      color: white;\n    }\n\n    .a1-10 .a1-1 .a4-4.a7-14 {\n      color: yellow;\n    }\n\n    .a11-9 .ad-15 .a114-16 {\n      color: white;\n    }\n\n    .a11-9 .a4-4.a11-9 .a11-9 {\n      color: white;\n    }\n\n    .a9-7 .a19 > a {\n      color: yellow;\n    }\n\n    .a9-7 .a19 > a:active {\n      color: orange;\n      float: left;\n      margin-left: 40px;\n      mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n      mask-origin: inherit;\n      mask-position: 40% 74%;\n      padding: 40px;\n      padding-left: 41px;\n      position: sticky;\n      transition: all .4s ease;\n    }\n\n    .a1-10 .a1-1 > a:active {\n      color: orange;\n      margin-left: 40px;\n      float: left;\n      padding-left: 41px;\n      padding: 40px;\n      position: sticky;\n      transition: all .4s ease;\n      mask-origin: margin-box;\n      mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n      mask-position: 40% 74%;\n    }\n  }\n\n  body .a-0 {\n    color: yellow;\n  }\n\n  area .a-0 {\n    color: yellow;\n  }\n\n  .a9-7 .a19 {\n    color: white;\n  }\n\n  .a1-10 .a1-1 .a4-4.a7-14 {\n    color: yellow;\n  }\n\n  .a11-9 .ad-15 .a114-16 {\n    color: white;\n  }\n\n  .a11-9 .a4-4.a11-9 .a11-9 {\n    color: white;\n  }\n\n  .a9-7 .a19 > a {\n    color: yellow;\n  }\n\n  .a9-7 .a19 > a:active {\n    color: orange;\n    float: left;\n    margin-left: 40px;\n    mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n    mask-origin: inherit;\n    mask-position: 40% 74%;\n    padding: 40px;\n    padding-left: 41px;\n    position: sticky;\n    transition: all .4s ease;\n  }\n\n  .a1-10 .a1-1 > a:active {\n    color: orange;\n    margin-left: 40px;\n    float: left;\n    padding-left: 41px;\n    padding: 40px;\n    position: sticky;\n    transition: all .4s ease;\n    mask-origin: margin-box;\n    mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);\n    mask-position: 40% 74%;\n  }\n}\n\n.ad-15 .a1-1 {\n  color: yellow;\n}\n\narea .a-0 {\n  color: yellow;\n}\n\n@keyframes a1 {\n  0% {\n    color: lightgreen;\n  }\n\n  40% {\n    color: orange;\n  }\n}\n\n@keyframes a1 {\n  0% {\n    color: lightgreen;\n  }\n\n  40% {\n    color: orange;\n  }\n}\n\n"
      ],
      [
        "\n\nmain { margin: 40px; }\n\nbody { margin: 40px; }\n\na { margin: 4px; }\n\n@keyframes aa { \n  0% { color: white; }\n  40% { color: yellow; }\n}\n\n.aa { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 235, 59); float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n.ab { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background: url(\"a.jpg\") right top no-repeat rgb(255, 170, 170); animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; }\n\n.ac { background: url(\"a.jpg\") left top no-repeat, url(\"ad.jpg\") left top no-repeat, url(\"ad.jpg\") left top no-repeat; margin: 0px 14px 4em; }\n\n.ad { background: url(\"a.jpg\") left center no-repeat, url(\"a.jpg\") center center repeat-y, url(\"ad.jpg\") center center repeat-y; }\n\n.ae { background: rgb(255, 170, 170); }\n\n.af { background: url(\"a.jpg\") left top no-repeat, url(\"a1.jpg\") left top no-repeat, url(\"ad.jpg\") left top no-repeat; }\n\n.ag { background: url(\"a.jpg\") center center repeat-y orange; }\n\n.ah { color: yellow; }\n\n.am { background: orange; float: right; margin-right: 41px; max-width: 100%; padding: 40px 40px 40px 41px; width: 100px; }\n\n@media only screen and (min-width: 1404px) {\n  .aa { color: beige; }\n  .an { color: yellow; }\n}\n\n.ao { color: beige; padding: 41px; }\n\n@keyframes ab { \n  0% { color: lightgreen; }\n  40% { color: orange; }\n}\n\n.ah .a19 { color: white; }\n\n.ai .ab .ae.ap { color: yellow; }\n\n.aj .aq .ar { color: white; }\n\n.ak .ae.ak .ak { color: white; }\n\n@media only screen and (min-width: 1404px) {\n  .ao { color: orange; }\n}\n\nbody .aa { color: yellow; }\n\n.ah .a19 > a { color: yellow; }\n\n.ah .a19 > a:active { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position: 40% 74%; color: orange; float: right; margin-right: 40px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n\n.ai .ab > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; }\n\narea { color: beige; }\n\nmeta { margin: 1114px; }\n\n.ap { background: orange; }\n\n.as { background: beige; }\n\n.aq { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; animation: 0.4s ease 0s 1 normal none running aa; background: orange; float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n.at { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n@media only screen and (max-width: 1414px) {\n  body { background: beige; margin: 40px; }\n  main { margin: 40px; }\n  area { color: beige; }\n  a { margin: 4px; }\n  meta { margin: 1114px; }\n  .aa { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 235, 59); float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ab { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background: url(\"a.jpg\") right top no-repeat rgb(255, 170, 170); animation-name: ab; animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ap { background: aliceblue; }\n  .au { background: yellow; }\n  .ah { color: yellow; }\n  .aq { -webkit-mask-composite: inherit; animation: 0.4s ease 0s 1 normal none running aa; background: orange; float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; transition: all 0.4s ease 0s; width: 100px; }\n  .av { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  @media print {\n  body { background: beige; }\n  .aa { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ab { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background: url(\"a.jpg\") right top no-repeat rgb(255, 170, 170); animation-name: ab; animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ap { background: aliceblue; }\n  .aw { background: yellow; }\n  .ah { color: yellow; }\n  .aq { -webkit-mask-composite: inherit; animation: 0.4s ease 0s 1 normal none running aa; background: orange; float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ax { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ah .a19 { color: white; }\n  .ab0 .ab .ae.ap { color: yellow; }\n  .aj .aq .ar { color: white; }\n  .ak .ae.ak .ak { color: white; }\n  .ah .a19 > a { color: yellow; }\n  .ah .a19 > a:active { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; color: orange; float: right; margin-right: 40px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ab0 .ab > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; }\n}\n  body .aa { color: yellow; }\n  area .aa { color: yellow; }\n  .ah .a19 { color: white; }\n  .ab0 .ab .ae.ap { color: yellow; }\n  .aj .aq .ar { color: white; }\n  .ak .ae.ak .ak { color: white; }\n  .ah .a19 > a { color: yellow; }\n  .ah .a19 > a:active { -webkit-mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%; color: orange; float: right; margin-right: 40px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ab0 .ab > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; }\n}\n\n.aq .ab { color: yellow; }\n\narea .aa { color: yellow; }\n\n@keyframes a1 { \n  0% { color: lightgreen; }\n  40% { color: orange; }\n}\n\n@keyframes a1 { \n  0% { color: lightgreen; }\n  40% { color: orange; }\n}"
      ],
      [
        "\n\nmain { margin: 40px; }\n\nbody { margin: 40px; }\n\na { margin: 4px; }\n\n@keyframes aa {\n0% { color: white; }\n40% { color: yellow; }\n}\n\n@media only screen and (min-width: 1404px) {\n  .aa { color: beige; }\n  .ab { color: yellow; }\n}\n\n.aa { animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 235, 59) none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n.ac { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background: rgb(255, 170, 170) url(\"a.jpg\") no-repeat scroll right top; animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-origin: inherit; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-position: 40% 74%; }\n\n.ad { background: url(\"a.jpg\") no-repeat scroll left top, url(\"ad.jpg\") no-repeat scroll left top, rgba(0, 0, 0, 0) url(\"ad.jpg\") no-repeat scroll left top; margin: 0px 14px 4em; }\n\n.ae { background: url(\"a.jpg\") no-repeat scroll left center, url(\"a.jpg\") repeat-y scroll center center, rgba(0, 0, 0, 0) url(\"ad.jpg\") repeat-y scroll center center; }\n\n.af { background: rgb(255, 170, 170) none repeat scroll 0% 0%; }\n\n.ag { background: url(\"a.jpg\") no-repeat scroll left top, url(\"a1.jpg\") no-repeat scroll left top, rgba(0, 0, 0, 0) url(\"ad.jpg\") no-repeat scroll left top; }\n\n.ah { background: orange url(\"a.jpg\") repeat-y scroll center center; }\n\n.ai { color: yellow; }\n\n.an { background: orange none repeat scroll 0% 0%; float: right; margin-right: 41px; max-width: 100%; padding: 40px 40px 40px 41px; width: 100px; }\n\n.ao { color: beige; padding: 41px; }\n\n@keyframes ab {\n0% { color: lightgreen; }\n40% { color: orange; }\n}\n\n.ai .a19 { color: white; }\n\n.aj .ac .af.ap { color: yellow; }\n\n.ak .aq .ar { color: white; }\n\n.al .af.al .al { color: white; }\n\n@media only screen and (min-width: 1404px) {\n  .ao { color: orange; }\n}\n\nbody .aa { color: yellow; }\n\n.ai .a19 > a { color: yellow; }\n\n.ai .a19 > a:active { color: orange; float: right; margin-right: 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-position: 40% 74%; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n\n.aj .ac > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-position: 40% 74%; }\n\narea { color: beige; }\n\nmeta { margin: 1114px; }\n\n@media only screen and (max-width: 1414px) {\n  body { background: beige none repeat scroll 0% 0%; margin: 40px; }\n  main { margin: 40px; }\n  area { color: beige; }\n  a { margin: 4px; }\n  meta { margin: 1114px; }\n  .aa { animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 235, 59) none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ac { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background: rgb(255, 170, 170) url(\"a.jpg\") no-repeat scroll right top; animation-name: ab; animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-origin: inherit; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-position: 40% 74%; }\n  .ap { background: aliceblue none repeat scroll 0% 0%; }\n  .as { background: yellow none repeat scroll 0% 0%; }\n  .ai { color: yellow; }\n  .aq { animation: 0.4s ease 0s 1 normal none running aa; background: orange none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-composite: inherit; max-width: 100px; padding: 40px 41px 40px 40px; transition: all 0.4s ease 0s; width: 100px; }\n  .at { animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170) none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  @media print {\n  body { background: beige none repeat scroll 0% 0%; }\n  .aa { animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170) none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ac { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background: rgb(255, 170, 170) url(\"a.jpg\") no-repeat scroll right top; animation-name: ab; animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-origin: inherit; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-position: 40% 74%; }\n  .ap { background: aliceblue none repeat scroll 0% 0%; }\n  .au { background: yellow none repeat scroll 0% 0%; }\n  .ai { color: yellow; }\n  .aq { animation: 0.4s ease 0s 1 normal none running aa; background: orange none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-composite: inherit; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .av { animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170) none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ai .a19 { color: white; }\n  .ac0 .ac .af.ap { color: yellow; }\n  .ak .aq .ar { color: white; }\n  .al .af.al .al { color: white; }\n  .ai .a19 > a { color: yellow; }\n  .ai .a19 > a:active { color: orange; float: right; margin-right: 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ac0 .ac > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-position: 40% 74%; }\n}\n  body .aa { color: yellow; }\n  area .aa { color: yellow; }\n  .ai .a19 { color: white; }\n  .ac0 .ac .af.ap { color: yellow; }\n  .ak .aq .ar { color: white; }\n  .al .af.al .al { color: white; }\n  .ai .a19 > a { color: yellow; }\n  .ai .a19 > a:active { color: orange; float: right; margin-right: 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ac0 .ac > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-position: 40% 74%; }\n}\n\n.ap { background: orange none repeat scroll 0% 0%; }\n\n.aw { background: beige none repeat scroll 0% 0%; }\n\n.aq { animation: 0.4s ease 0s 1 normal none running aa; background: orange none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n.ax { animation: 0.4s ease 0s 1 normal none running aa; background: rgb(255, 170, 170) none repeat scroll 0% 0%; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n.aq .ac { color: yellow; }\n\narea .aa { color: yellow; }\n\n@keyframes a1 {\n0% { color: lightgreen; }\n40% { color: orange; }\n}\n\n@keyframes a1 {\n0% { color: lightgreen; }\n40% { color: orange; }\n}"
      ],
      [
        "\n\nmain { margin: 40px; }\n\nbody { margin: 40px; }\n\na { margin: 4px; }\n\n@-webkit-keyframes aa { \n  0% { color: white; }\n  40% { color: yellow; }\n}\n\n.aa { animation: 0.4s ease 0s 1 normal none running aa; background-color: rgb(255, 235, 59); float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n.ab { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background-image: url(\"a.jpg\"); background-color: rgb(255, 170, 170); animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-origin: inherit; mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; background-position: right top; background-repeat: no-repeat no-repeat; }\n\n.ac { background-image: url(\"a.jpg\"), url(\"ad.jpg\"), url(\"ad.jpg\"); background-size: initial, initial, initial; background-attachment: initial, initial, initial; background-origin: initial, initial, initial; background-clip: initial, initial, initial; margin: 0px 14px 4em; background-position: left top, left top, left top; background-repeat: no-repeat, no-repeat, no-repeat; }\n\n.ad { background-image: url(\"a.jpg\"), url(\"a.jpg\"), url(\"ad.jpg\"); background-size: initial, initial, initial; background-attachment: initial, initial, initial; background-origin: initial, initial, initial; background-clip: initial, initial, initial; background-position: left center, center center, center center; background-repeat: no-repeat, repeat-y, repeat-y; }\n\n.ae { background-color: rgb(255, 170, 170); }\n\n.af { background-image: url(\"a.jpg\"), url(\"a1.jpg\"), url(\"ad.jpg\"); background-size: initial, initial, initial; background-attachment: initial, initial, initial; background-origin: initial, initial, initial; background-clip: initial, initial, initial; background-position: left top, left top, left top; background-repeat: no-repeat, no-repeat, no-repeat; }\n\n.ag { background-image: url(\"a.jpg\"); background-color: orange; background-position: center center; background-repeat: no-repeat repeat; }\n\n.ah { color: yellow; }\n\n.am { background-color: orange; float: right; margin-right: 41px; max-width: 100%; padding: 40px 40px 40px 41px; width: 100px; }\n\n@media only screen and (min-width: 1404px) {\n  .aa { color: beige; }\n  .an { color: yellow; }\n}\n\n.ao { color: beige; padding: 41px; }\n\n@-webkit-keyframes ab { \n  0% { color: lightgreen; }\n  40% { color: orange; }\n}\n\n.ah .a19 { color: white; }\n\n.ai .ab .ae.ap { color: yellow; }\n\n.aj .aq .ar { color: white; }\n\n.ak .ae.ak .ak { color: white; }\n\n@media only screen and (min-width: 1404px) {\n  .ao { color: orange; }\n}\n\nbody .aa { color: yellow; }\n\n.ah .a19 > a { color: yellow; }\n\n.ah .a19 > a:active { color: orange; float: right; margin-right: 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n\n.ai .ab > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; }\n\narea { color: beige; }\n\nmeta { margin: 1114px; }\n\n.ap { background-color: orange; }\n\n.as { background-color: beige; }\n\n.aq { animation: 0.4s ease 0s 1 normal none running aa; background-color: orange; float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n.at { animation: 0.4s ease 0s 1 normal none running aa; background-color: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n\n@media only screen and (max-width: 1414px) {\n  body { background-color: beige; margin: 40px; }\n  main { margin: 40px; }\n  area { color: beige; }\n  a { margin: 4px; }\n  meta { margin: 1114px; }\n  .aa { animation: 0.4s ease 0s 1 normal none running aa; background-color: rgb(255, 235, 59); float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ab { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background-image: url(\"a.jpg\"); background-color: rgb(255, 170, 170); animation-name: ab; animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-origin: inherit; mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; background-position: right top; background-repeat: no-repeat no-repeat; }\n  .ap { background-color: aliceblue; }\n  .au { background-color: yellow; }\n  .ah { color: yellow; }\n  .aq { animation: 0.4s ease 0s 1 normal none running aa; background-color: orange; float: right; margin: 0px 41px 4px 40px; mask-composite: inherit; max-width: 100px; padding: 40px 41px 40px 40px; transition: all 0.4s ease 0s; width: 100px; }\n  .av { animation: 0.4s ease 0s 1 normal none running aa; background-color: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  @media print {\n  body { background-color: beige; }\n  .aa { animation: 0.4s ease 0s 1 normal none running aa; background-color: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ab { width: 100%; max-width: 100px; margin: 0px 14px 4px 41px; background-image: url(\"a.jpg\"); background-color: rgb(255, 170, 170); animation-name: ab; animation-duration: 1.4s; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-origin: inherit; mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; background-position: right top; background-repeat: no-repeat no-repeat; }\n  .ap { background-color: aliceblue; }\n  .aw { background-color: yellow; }\n  .ah { color: yellow; }\n  .aq { animation: 0.4s ease 0s 1 normal none running aa; background-color: orange; float: right; margin: 0px 41px 4px 40px; mask-composite: inherit; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ax { animation: 0.4s ease 0s 1 normal none running aa; background-color: rgb(255, 170, 170); float: right; margin: 0px 41px 4px 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; max-width: 100px; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; width: 100px; }\n  .ah .a19 { color: white; }\n  .ab0 .ab .ae.ap { color: yellow; }\n  .aj .aq .ar { color: white; }\n  .ak .ae.ak .ak { color: white; }\n  .ah .a19 > a { color: yellow; }\n  .ah .a19 > a:active { color: orange; float: right; margin-right: 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ab0 .ab > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; }\n}\n  body .aa { color: yellow; }\n  area .aa { color: yellow; }\n  .ah .a19 { color: white; }\n  .ab0 .ab .ae.ap { color: yellow; }\n  .aj .aq .ar { color: white; }\n  .ak .ae.ak .ak { color: white; }\n  .ah .a19 > a { color: yellow; }\n  .ah .a19 > a:active { color: orange; float: right; margin-right: 40px; mask-image: linear-gradient(rgb(0, 0, 0), transparent); mask-origin: inherit; -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; padding: 40px 41px 40px 40px; position: sticky; transition: all 0.4s ease 0s; }\n  .ab0 .ab > a:active { color: orange; margin-left: 40px; float: left; padding: 40px; position: sticky; transition: all 0.4s ease 0s; mask-image: linear-gradient(rgb(0, 0, 0), transparent); -webkit-mask-position-x: 40%; -webkit-mask-position-y: 74%; }\n}\n\n.aq .ab { color: yellow; }\n\narea .aa { color: yellow; }\n\n@-webkit-keyframes a1 { \n  0% { color: lightgreen; }\n  40% { color: orange; }\n}\n\n@-webkit-keyframes a1 { \n  0% { color: lightgreen; }\n  40% { color: orange; }\n}"
      ]
    ]);
  });

});
