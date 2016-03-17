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
      '<div class="addForm">',
        '<input type="textarea" name="bitter" placeholder="let us be bitter">',
      '</div>',
      '<div class="addForm">',
        '<input type="text" name="name" placeholder="Name">',
      '<div class="addForm">',
        '<input type="submit" name="Submit">',
      '</div>',
    '</form>'
  ].join("")
}
