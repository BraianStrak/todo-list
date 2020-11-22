const todoListFactory = (content) => {
    let items = [];

    const getItems = () => {
        return items;
    };

    const addItem = (item) => {
        items.push(item);
    };

    return {content, addItem, getItems};
};

export {todoListFactory}