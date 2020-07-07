$('#Bork').keypress(function (e) {
       //Enter key
       if (e.which === 13) {
              return false;
       }
});
var darkThemeEnabled;
var modals = document.querySelectorAll('.modal-content');
var dropdowns = document.querySelectorAll('.dropdown-menu');
var themecheck;
function IsDarkTheme()
{
       darkThemeEnabled = document.body.classList.toggle('dark-theme');
       themecheck = document.getElementById("ChangeTheme").checked;

       if(themecheck === false)
       {
              for(var a = 0, m = modals.length; a < m; a ++) {
                     modals[a].style.backgroundColor= '#333333';
                     modals[a].style.color= '#fff';
              }
              for(var b = 0, d = dropdowns.length; b < d; b++) {
                     dropdowns[b].style.backgroundColor= '#333333';
                     dropdowns[b].style.color = '#fff'
              }
       }
       if(themecheck === true)
       {
              for(var aa = 0, mm = modals.length; aa < mm; aa ++) {
                     modals[aa].style.backgroundColor= '#fff';
                     modals[aa].style.color = '#333'
              }
              for(var bb = 0, dd = dropdowns.length; bb < dd; bb++) {
                     dropdowns[bb].style.backgroundColor= '#fff';
                     dropdowns[bb].style.color = '#333'
              }
       }

       localStorage.setItem('darkThemeEnabled', darkThemeEnabled);
}

if (JSON.parse(localStorage.getItem('darkThemeEnabled')))
{
       document.body.classList.add('dark-theme');
       document.getElementById("ChangeTheme").checked = true;

       themecheck = document.getElementById("ChangeTheme").checked;

              for(var a = 0, m = modals.length; a < m; a ++) {
                     modals[a].style.backgroundColor= '#333333';
                     modals[a].style.color= '#fff';
              }
              for(var b = 0, d = dropdowns.length; b < d; b++) {
                     dropdowns[b].style.backgroundColor= '#333333';
                     dropdowns[b].style.color = '#fff'
              }
}
