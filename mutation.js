const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        const list = document.querySelector(`ol`);
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
        };
        // instance
        const observer = new MutationObserver(function(mutations) {
            // console.log(`mutations =`, mutations); // MutationRecord
            mutations.forEach(function(mutation) {
                // console.log("mutation =", mutation);
                if (mutation.type === "characterData") {
                    // target & object === typeof(mutation.target)
                    // console.log("A child node has been added OR removed.");
                    // console.log("[...mutation.addedNodes].length", [...mutation.addedNodes].length);
                    // console.log("[...mutation.removedNodes].length", [...mutation.removedNodes].length);
                    // if (mutation.target && [...mutation.addedNodes].length) {
                    //     // [...mutation.addedNodes].length
                    //     console.log(`A child node ${mutation.target} has been added!`, mutation.target);
                    // }
                    // if (mutation.target && [...mutation.removedNodes].length) {
                    //     // [...mutation.removedNodes].length
                    //     console.log(`A child node ${mutation.target} has been removed!`, mutation.target);
                    // }
                }
                if (mutation.type === "childList") {
                    if (mutation.target && [...mutation.addedNodes].length) {
                        console.log(`A child node ${mutation.target} has been added!`, mutation.target);
                    }
                    if (mutation.target && [...mutation.removedNodes].length) {
                        console.log(`A child node ${mutation.target} has been removed!`, mutation.target);
                    }
                    // do somwthings
                    let list_values = [];
                    list_values = [].slice.call(list.children).map(function(node) {
                        return node.innerHTML;
                    }).filter(function(str) {
                        if (str === "<br>") {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    console.log(list_values);
                }
                
            });
        });
        observer.observe(list, config);
