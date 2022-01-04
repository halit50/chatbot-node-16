const Bot = class {
  constructor(entity) {
    this.entity = entity;
  }

  findActionByValue(value) {
    const { actions } = this.entity;

    console.log(value);

    for (let i = 0; i < actions.length; i += 1) {
      const action = actions[i];

      for (let j = 0; j < action.keywords.length; j += 1) {
        const keyword = action.keywords[j];

        if (value === keyword) {
          return action.action();
        }
      }
    }
    return false;
  }
};

export default Bot;
