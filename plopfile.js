module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a Page',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your Page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/Pages/{{pascalCase name}}/{{pascalCase name}}.Container.js',
        templateFile: 'plop-templates/Page.js.hbs'
      },
      {
        type: 'add',
        path: 'src/Pages/{{pascalCase name}}/{{pascalCase name}}.style.scss',
        templateFile: 'plop-templates/style.scss.hbs'
      },
      {
        type: 'add',
        path: 'src/Pages/{{pascalCase name}}/{{pascalCase name}}.Localization.js'
      },
      {
        type: 'add',
        path: 'src/Pages/{{pascalCase name}}/Redux/{{pascalCase name}}.Actions.js'
      },
      {
        type: 'add',
        path: 'src/Pages/{{pascalCase name}}/Redux/{{pascalCase name}}.Types.js'
      },
      {
        type: 'add',
        path: 'src/Pages/{{pascalCase name}}/Redux/{{pascalCase name}}.Reducer.js',
        templateFile: 'plop-templates/Reducer.js.hbs'
      }
    ]
  });
  plop.setGenerator('ui-component', {
    description: 'Create a reusable UI component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/SharedComponents/UIElements/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/SharedComponents/UIElements/{{pascalCase name}}/{{pascalCase name}}.style.scss',
        templateFile: 'plop-templates/style.scss.hbs'
      }
    ]
  });
  plop.setGenerator('form-component', {
    description: 'Create a reusable form component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/SharedComponents/FormElements/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/SharedComponents/FormElements/{{pascalCase name}}/{{pascalCase name}}.style.scss',
        templateFile: 'plop-templates/style.scss.hbs'
      }
    ]
  });
};
