const firstClick = document.querySelector('.display_story');


function earthStoryCreator() {
    firstClick.textContent = "This is a normal world.";
    //Creating Text
    const earthText = document.createElement('p');
    earthText.innerHTML = "Please select the protogonist charcters one or two"
    //Appending Text
    const story2 = document.querySelector('.display_story');
    story2.appendChild(earthText);
    // creating Button
    const secondButton = document.createElement("button");
    secondButton.innerHTML = "OneProtoganist" 
    // AppendingButton
    const option = document.querySelector('.display_story');
    option.appendChild(secondButton);
    // creating Button
    const secondButton2 = document.createElement("button");
    secondButton2.innerHTML = "TwoProtoganists" 
    // AppendingButton
    const option2 = document.querySelector('.display_story');
    option2.appendChild(secondButton2);
    //CreatingEventListener
    secondButton.addEventListener('click', function() {
        firstClick.textContent = "This is a normal world and a guy with a golden heart to help out people.";
        //Creating Text
        const earthText = document.createElement('p');
        earthText.innerHTML = "Please select villans for your story"
        //Appending Text
        const story2 = document.querySelector('.display_story');
        story2.appendChild(earthText);
        // creating Button
        const secondButton = document.createElement("button");
        secondButton.innerHTML = "Normal Human" 
        // AppendingButton
        const option = document.querySelector('.display_story');
        option.appendChild(secondButton);
        // creating Button
        const secondButton2 = document.createElement("button");
        secondButton2.innerHTML = "A Big Company" 
        // AppendingButton
        const option2 = document.querySelector('.display_story');
        option2.appendChild(secondButton2);
         //CreatingEventListener
        secondButton.addEventListener('click', function() {
            firstClick.textContent = "This is a normal world and a guy with a golden heart to help out people. in a village where our hero lives one massaih named ill minded man was there who occupies poor people lands force fully";
            //Creating Text
            const earthText = document.createElement('p');
            earthText.innerHTML = "Please select hero and villain path crossing"
            //Appending Text
            const story2 = document.querySelector('.display_story');
            story2.appendChild(earthText);
            // creating Button
            const secondButton = document.createElement("button");
            secondButton.innerHTML = "occupies his lands" 
            // AppendingButton
            const option = document.querySelector('.display_story');
            option.appendChild(secondButton);
            // creating Button
            const secondButton2 = document.createElement("button");
            secondButton2.innerHTML = "occupies best friends land by murdering him" 
            // AppendingButton
            const option2 = document.querySelector('.display_story');
            option2.appendChild(secondButton2);
            //CreatingEventListener
            secondButton.addEventListener('click', function() {
                firstClick.textContent = "This is a normal world and a guy with a golden heart to help out people. in a village where our hero lives one massaih named ill minded man was there who occupies poor people lands force fully. on one fine day when hero is not in the village that bad guy goes and graps the land documents illegally owns them......so please create dialogs and screen for above synopiss";
                // creating Button
                const exitButton = document.createElement("button");
                exitButton.innerHTML = "PrintStory" 
                // AppendingButton
                const onlyOption = document.querySelector('.display_story');
                onlyOption.appendChild(exitButton);
                //PrintEventListener
                exitButton.addEventListener('click', window.print())
            });
            secondButton2.addEventListener('click', function() {
                firstClick.textContent = "This is a normal world and a guy with a golden heart to help out people. in a village where our hero lives one massaih named ill minded man was there who occupies poor people lands force fully. when hero was heard the news that his friend commited sucide hero try to investigate as he is sure that his friend never kills himself and that is defenatly a murder..............so please create dialogs and screen for above synopiss";
                // creating Button
                const exitButton = document.createElement("button");
                exitButton.innerHTML = "PrintStory" 
                // AppendingButton
                const onlyOption = document.querySelector('.display_story');
                onlyOption.appendChild(exitButton);
                //PrintEventListener
                exitButton.addEventListener('click', window.print())
            });
        });
        secondButton2.addEventListener('click', function() {
            firstClick.textContent = "This is a normal world and a guy with a golden heart to help out people. in near city there is a company called GlassCOv who is polluting all the areas and causing health issues to people";
            //Creating Text
            const earthText = document.createElement('p');
            earthText.innerHTML = "Please select hero and villain path crossing"
            //Appending Text
            const story2 = document.querySelector('.display_story');
            story2.appendChild(earthText);
            // creating Button
            const secondButton = document.createElement("button");
            secondButton.innerHTML = "Father dies due to cancer caused by company" 
            // AppendingButton
            const option = document.querySelector('.display_story');
            option.appendChild(secondButton);
            // creating Button
            const secondButton2 = document.createElement("button");
            secondButton2.innerHTML = "Unable to do the farming" 
            // AppendingButton
            const option2 = document.querySelector('.display_story');
            option2.appendChild(secondButton2);
            //CreatingEventListener
            secondButton.addEventListener('click', function() {
                firstClick.textContent = "This is a normal world and a guy with a golden heart to help out people. in near city there is a company called GlassCOv who is polluting all the areas and causing health issues to people. One day father heath issue came after consulting doctors hero came to know that this cancer caused by company so he make that no other guy loose their family by this companies polutions...............so please create dialogs and screen for above synopiss";
                // creating Button
                const exitButton = document.createElement("button");
                exitButton.innerHTML = "PrintStory" 
                // AppendingButton
                const onlyOption = document.querySelector('.display_story');
                onlyOption.appendChild(exitButton);
                //PrintEventListener
                exitButton.addEventListener('click', window.print())
            });
            secondButton2.addEventListener('click', function() {
                firstClick.textContent = "This is a normal world and a guy with a golden heart to help out people. in near city there is a company called GlassCOv who is polluting all the areas and causing health issues to people. hero came to village to do the farming by resigning the job in software company. but here in village water is being turn to company instead of farmlands and land are being poluted with the chemicals and hero decide to figth hime.......so please create dialogs and screen for above synopiss";
                // creating Button
                const exitButton = document.createElement("button");
                exitButton.innerHTML = "PrintStory" 
                // AppendingButton
                const onlyOption = document.querySelector('.display_story');
                onlyOption.appendChild(exitButton);
                //PrintEventListener
                exitButton.addEventListener('click', window.print())
            });
        });    
    }); 
    secondButton2.addEventListener('click', function() {
        firstClick.textContent = "This is a normal world and two brother living in normal village who wants to help pepole.";
        //Creating Text
        const earthText = document.createElement('p');
        earthText.innerHTML = "Please select villans for your story"
        //Appending Text
        const story2 = document.querySelector('.display_story');
        story2.appendChild(earthText);
        // creating Button
        const secondButton = document.createElement("button");
        secondButton.innerHTML = "A group of guys" 
        // AppendingButton
        const option = document.querySelector('.display_story');
        option.appendChild(secondButton);
        // creating Button
        const secondButton2 = document.createElement("button");
        secondButton2.innerHTML = "a religion" 
        // AppendingButton
        const option2 = document.querySelector('.display_story');
        option2.appendChild(secondButton2);
        //CreatingEventListener
        secondButton.addEventListener('click', function() {
            firstClick.textContent = "This is a normal world and two brother living in nornal village who wants to help pepole. in that area only a group of people who work for there only life and doesn't care about others";
            //Creating Text
            const earthText = document.createElement('p');
            earthText.innerHTML = "Please select hero and villain path crossing"
            //Appending Text
            const story2 = document.querySelector('.display_story');
            story2.appendChild(earthText);
            // creating Button
            const secondButton = document.createElement("button");
            secondButton.innerHTML = "Neglect to help which caused a problem" 
            // AppendingButton
            const option = document.querySelector('.display_story');
            option.appendChild(secondButton);
            // creating Button
            const secondButton2 = document.createElement("button");
            secondButton2.innerHTML = "Caused a problem that create chain of events which effect our hero." 
            // AppendingButton
            const option2 = document.querySelector('.display_story');
            option2.appendChild(secondButton2);
        });
        secondButton2.addEventListener('click', function() {
            firstClick.textContent = "This is a normal world and two brother living in nornal village who wants to help pepole. and in that country there a evil religion who want to rule all by forceing them into unnatural unbelivalbe things";
            //Creating Text
            const earthText = document.createElement('p');
            earthText.innerHTML = "Please select hero and villain path crossing"
            //Appending Text
            const story2 = document.querySelector('.display_story');
            story2.appendChild(earthText);
            // creating Button
            const secondButton = document.createElement("button");
            secondButton.innerHTML = "sister elects that religion which hero don't like" 
            // AppendingButton
            const option = document.querySelector('.display_story');
            option.appendChild(secondButton);
            // creating Button
            const secondButton2 = document.createElement("button");
            secondButton2.innerHTML = "murdered a friend as they want proof something" 
            // AppendingButton
            const option2 = document.querySelector('.display_story');
            option2.appendChild(secondButton2);
        }); 
    }); 
}

function anotherWorldStory(){
    firstClick.textContent = "This is a wierd world. Physics won't work here prpoerly.";
    //Creating Text
    const earthText = document.createElement('p');
    earthText.innerHTML = "Please select the protogonist charcters one or two"
    //Appending Text
    const story2 = document.querySelector('.display_story');
    story2.appendChild(earthText);
    // creating Button
    const secondButton = document.createElement("button");
    secondButton.innerHTML = "OneProtoganist" 
    // AppendingButton
    const option = document.querySelector('.display_story');
    option.appendChild(secondButton);
    // creating Button
    const secondButton2 = document.createElement("button");
    secondButton2.innerHTML = "TwoProtoganists" 
    // AppendingButton
    const option2 = document.querySelector('.display_story');
    option2.appendChild(secondButton2);
    //CreatingEventListener
    secondButton.addEventListener('click', function() {
        firstClick.textContent = "This is a wierd world. Physics won't work here prpoerly. and there is village called naggara there lives our superpowers possed hero BHEMMARA who has the ability to help people lives";
        //Creating Text
        const earthText = document.createElement('p');
        earthText.innerHTML = "Please select villans for story"
        //Appending Text
        const story2 = document.querySelector('.display_story');
        story2.appendChild(earthText);
        // creating Button
        const secondButton = document.createElement("button");
        secondButton.innerHTML = "one super powered villain" 
        // AppendingButton
        const option = document.querySelector('.display_story');
        option.appendChild(secondButton);
        // creating Button
        const secondButton2 = document.createElement("button");
        secondButton2.innerHTML = "a normal king who has access to all villains" 
        // AppendingButton
        const option2 = document.querySelector('.display_story');
        option2.appendChild(secondButton2);
    }); 
    secondButton2.addEventListener('click', function() {
        firstClick.textContent = "This is a wierd world. Physics won't work here prpoerly. there lives 2 sisters who do the thinks that nobody can do";
        //Creating Text
        const earthText = document.createElement('p');
        earthText.innerHTML = "Please select villans for story"
        //Appending Text
        const story2 = document.querySelector('.display_story');
        story2.appendChild(earthText);
        // creating Button
        const secondButton = document.createElement("button");
        secondButton.innerHTML = "a human beings with bad intestions" 
        // AppendingButton
        const option = document.querySelector('.display_story');
        option.appendChild(secondButton);
        // creating Button
        const secondButton2 = document.createElement("button");
        secondButton2.innerHTML = "a family members who do the wrong thinks" 
        // AppendingButton
        const option2 = document.querySelector('.display_story');
        option2.appendChild(secondButton2);
    }); 
}