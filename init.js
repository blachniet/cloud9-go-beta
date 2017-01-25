// You can access plugins via the 'services' global variable
/*global services, plugin*/
require(["plugins/c9.ide.ace.keymaps/vim/keymap"], function(vim){
    vim.map("J", "8j", "normal")
    vim.map("K", "8k", "normal")
    vim.map(",b", "c9:build", "normal")
    vim.map(",g", "c9:run", "normal")
    vim.map("jk", "<Esc>", "insert")
    vim.map("<C-f>", "c9:find", "normal")
    vim.map("<C-e>", "c9:navigate")
    vim.map("<C-x>", "c9:cut", "normal")
    vim.map("<C-c>", "c9:copy", "normal")
    vim.map("<C-p>", "c9:paste", "normal")
    vim.map("<C-a>", "c9:selectall", "normal")
})