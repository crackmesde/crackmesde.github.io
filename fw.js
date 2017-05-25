function toggle(item_id) {
  var obj = document.getElementById(item_id);
  if (obj) {
    if (obj.style.display == 'none')
      obj.style.display = 'block';
    else 
      obj.style.display = 'none';
  }
}
function archive_pager(new_start) {
  document.forms['archive'].start.value = new_start;
  document.forms['archive'].submit();
  return false;
}
function sxm(addr) {
  window.location.href= "mailto:" + addr.replace(/`/, '.').replace(/~/, '@');
  return (false);
}
function post_form(formid) {
  document.getElementById(formid).submit();
  return false;
}
function set_select(do_check) {
    var e = document.getElementsByTagName("input");
    var i;
    for ( i = 0; i<e.length; i++) {
      if (e[i].type == "checkbox"){ e[i].checked = do_check; }
    }
    return false;
}

