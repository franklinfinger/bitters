module.exports = {
  bitter: [
    '<p class="bitterText"><%= bitter %></p>',
    '<h3><%= name %></h3>',
    '<ul>',
    '<li><button class="delete">delete</button></li>',
    '<li><button class="edit showEdit">edit</button></li>',
    '</ul>',
  ].join(""),

  editBitter: [
      '<div class="editForm">',
      '<input class="editRant" type="text" value="<%= bitter %>">',
      '</div>',
      '<div class="editForm">',
      '<button type="submit" class="editBitters" name="submit">Edit Bitter</button>',
      '</div>'
  ].join(''),

  addBitter: [
    '<form class="">',
      '<textarea name="bitter" rows="5" cols"40" placeholder="let us be bitter"</textarea>',
      '<input type="text" name="name" placeholder="Name">',
      '<button class="submitBitter" type="submit" name="button">Add Bitter</button>',
    '</form>'
  ].join("")
}

module.exports = templates;
