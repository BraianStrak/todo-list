const todoListFactory = (content) => {
    let items = [];

    const addItem = (item) => {
        items.push(item);
    };

    return {content, addItem, items};
};

export {todoListFactory}