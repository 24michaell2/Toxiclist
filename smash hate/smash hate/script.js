
function zeldaOffline()
{
    document.getElementById('onlineselection').remove()
    document.getElementById('offlinebutton').remove()
    document.getElementById('onlinebutton').remove()
    document.getElementById("zeldawin").innerHTML += "<button id='offlinelosebutton' onclick='takesSkill()'>B</button>"
}

function zeldaOnline()
{
    document.getElementById('onlineselection').remove()
    document.getElementById('offlinebutton').remove()
    document.getElementById('onlinebutton').remove()
    document.getElementById("zeldawin").innerHTML += "<button id='onlinewinbutton' onclick='win()'>B</button>"
}

function takesSkill()
{
    document.getElementById("offlinelosebutton").remove()
    document.getElementById("zeldawin").innerHTML += "<p id='zeldawinlose'>Um. You're gonna have to use skill to win</p>"
    document.getElementById("zeldawin").innerHTML += "<button id='retry' onclick='resetZeldaWin()'>Retry</button>"
}

function win()
{
    document.getElementById("onlinewinbutton").remove()
    document.getElementById("zeldawin").innerHTML += "<p id='zeldawinlose'>YOU WIN!!</p>"
    document.getElementById("zeldawin").innerHTML += "<button id='retry' onclick='resetZeldaWin()'>Retry</button>"
}

function resetZeldaWin()
{
    document.getElementById('zeldawinlose').remove()
    document.getElementById('zeldawin').innerHTML += '<p id="onlineselection">Please select mode:</p>'
    document.getElementById('zeldawin').innerHTML += '<button id="onlinebutton" onclick="zeldaOnline()">Online</button>'
    document.getElementById('zeldawin').innerHTML +=  '<button id="offlinebutton" onclick="zeldaOffline()">Offline</button>'
    document.getElementById('retry').remove()

}






function minminShield()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>Min-Min keeps spamming and breaks your shield</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminSpotdodge()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>You dodge the first Forward Smash but Min-Min just throws out another and hits you</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminRun()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>You run straight into Min-Min's Forward Smash</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminJump()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>Min-Min jumps and still hits you with her long ARMS</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminSD()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>Correct! SD-ing ensures that you won't have to sit through the pain of versing a Min-Min</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function resetMinMini()
{
    document.getElementById('minminresult').remove()
    document.getElementById('resetMinMini').remove()
    document.getElementById('minmini').innerHTML += '<p id="minminCYOA">Min-Min is using forward smash against you from the other side of the stage, what do you do:</p>'
    document.getElementById('minmini').innerHTML += "<button id=\"minminshieldbutton\" onclick=\"minminShield()\">Shield</button>"
    document.getElementById('minmini').innerHTML += "<button id=\"minminspotdodgebutton\" onclick=\"minminSpotdodge()\">Spotdodge</button>"
    document.getElementById('minmini').innerHTML += '<button id="minminrunbutton" onclick="minminRun()">Run up to approach</button>'
    document.getElementById("minmini").innerHTML += '<button id="minminjumpbutton" onclick="minminJump()">Jump to Approach</button>'
    document.getElementById('minmini').innerHTML += '<button id="minminsdbutton" onclick="minminSD()">SD</button>'
}


function gwProjectile()
{
    document.getElementById('gwCYOA').remove()
    document.getElementById('gwprojectile').remove()
    document.getElementById('gwground').remove()
    document.getElementById('gwair').remove()
    document.getElementById('gwsmart').remove()
    document.getElementById('minmini').innerHTML += '<p id="gwresult">Min-Min is using forward smash against you from the other side of the stage, what do you do:</p>'
}