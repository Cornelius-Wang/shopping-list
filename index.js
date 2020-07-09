/* These functions work */
$(function addOrRemoveItem() {
    /* Preventing the submission from default behavior i.e. backend call */
    $('#js-shopping-list-form').submit( event => {
    event.preventDefault();
    
    /* Naming the string we are adding to the code */
    const newItem = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    
    /* Adding the new string + button code to the shopping list */
    $('ul').append(
        
        '<li>' +
            '<span class="shopping-item">' + 
            newItem + 
            '</span>' +
                '<div class="shopping-item-controls">' +
                    '<button class="shopping-item-toggle">' +
                        '<span class="button-label">check</span>' +
                    '</button>' +
                    '<button class="shopping-item-delete">' +
                        '<span class="button-label">delete</span>' +
                    '</button>' +
                '</div>' +
        '</li>'
        
    );

    });

    /* On clicking the delete button */
    $('ul').on('click', '.shopping-item-delete', function(event) {
        /* find the ancestor of the button */
        const removeTarget = $(event.currentTarget).parents("li");
        /* remove the li element from the DOM */
        $(removeTarget).remove();

    });

}
);

$(function checkItem() {
    /* On clicking the check button */
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        const strikeItem = $(event.currentTarget).parents("div");
        const realItem = $(strikeItem).siblings();
        /* add the class '.shopping-item__checked' to checked items */
        $(realItem).toggleClass('shopping-item__checked');

    });
}
);