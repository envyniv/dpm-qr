var settings_fieldset;

window.onload = () => {
    document.getElementById("cosmetic").style.display = 'none';
    SettingsButton();
    settings_fieldset = document.getElementById("settings");
    settings_fieldset.style.display = 'none';
    ModeSelHTML();
}

function toggleSettingsVisibility() {
    switch (settings_fieldset.style.display) {
    case 'none':
	settings_fieldset.style.display = 'block';
	break;
    default:
	settings_fieldset.style.display = 'none';
    }
}

const music_tags = `
	    <hr />
	    <label class="switch" id="mus">
	      <input type="checkbox" name="sfx"/>
	      <span class="slider"></span>
	    </label>
	    <label for="mus">Music</label>
	    
	    <label class="switch" id="sfx">
	      <input type="checkbox" name="sfx" checked="true" />
	      <span class="slider"></span>
	    </label>
	    <label for="sfx">SFX</label>
`;

function ModeSelHTML() {
    var opsel = document.getElementById( "opsel" );
    
    //hide cosmetics
    
    if (window.location.href.indexOf(".github.io") > -1) {
	// github pages does not support PHP
	opsel.outerHTML = `
	    <p>GitHub Pages detected. PHP disabled.</p>
	    ` + music_tags;
	return;
    }
    opsel.outerHTML = `
	    <label>Mode of Operation</label>
	    <p>
	      This specifies whether the generation should happen<br />
	      on your machine or the one hosting this webpage. <br />
	      If unsure, leave as-is.
	    </p>
	    <input type="radio" id="phpmode" name="opmode" value="php"/>
	    <label for="phpmode">Server</label>
	    <input type="radio" name="opmode" value="js" id="jsmode" checked="true"/>
	    <label for="jsmode">Browser</label>
    ` + music_tags;
}

function SettingsButton() {
    var setbut = document.getElementById( "setbut" );
    setbut.outerHTML = `
      <button id="setbut" onclick="toggleSettingsVisibility()">
	<img src="assets/tool.svg" />
	<br />Settings<br />
      </button>
      `;
}

