function daisyMenuInit() {
  if (document.all && document.getElementById) {
    navRoot = document.getElementById("generalNavigation");
    if (navRoot == null)
      return;
    navRoot = navRoot.getElementsByTagName('UL')[0];
    for (i=0; i<navRoot.childNodes.length; i++) {
      node = navRoot.childNodes[i];
      if (node.nodeName=="LI") {
        node.onmouseover=function() {
          this.className+=" over";
        }
        node.onmouseout=function() {
          this.className=this.className.replace(" over", "");
        }
      }
    }
  }
}

daisyPushOnLoad(daisyMenuInit);

function daisyPushOnLoad(someFunction) {
    if (window.dojo != undefined) {
        dojo.addOnLoad(someFunction);
    } else if (window.onload != undefined && typeof window.onload == "function") {
        var currentFunction = window.onload;
        window.onload = function() {
            currentFunction();
            someFunction();
        }
    } else {
        window.onload = someFunction;
    }
}

/**
 * Collapses/expands a node in the navigation tree, which consists
 * of displaying/hiding the child <ul> and changing the class of the
 * <a> link. Works also in case the navigation tree is server-side
 * contextualized, i.e. not fully loaded in the client.
 */
function collapseExpandNavNode(linkElement) {
    var navChild = null;
    var children = linkElement.parentNode.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType == 1 && children[i].tagName.toLowerCase() == "ul") {
            navChild = children[i];
            break;
        }
    }

    if (navChild == null) {
        // follow the link, causing the node to be expanded server-side
        return true;
    }

    navChild.style.display = navChild.style.display == 'none' ? '' : 'none';
    toggleNavClassName(linkElement);
    return false;
}

function toggleNavClassName(element) {
    var className = element.className;
    if (className.indexOf("navnode-open") != -1) {
        element.className = className.replace(/navnode-open/, "navnode-closed");
    } else {
        element.className = className.replace(/navnode-closed/, "navnode-open");
    }
}