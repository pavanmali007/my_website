function navclick(kon) {
    switch (kon) {
        case 'sudo power':
            window.open("https://youtube.com/@SudoPower");
            break;

        case 'google':
            window.open("https://google.com");
            break;

        case 'youtube':
            window.open("https://youtube.com");
            break;

        case 'cwh':
            window.open("https://youtube.com/@CodeWithHarry");
            break;

        case 'hyperQuest':
            window.open("https://youtube.com/@HyperQuest");
            break;

        case 'w3Schools':
            window.open("https://www.w3schools.com/");
            break;

        default:
            let changedKon = `'${kon}'`;
            alert(`Recieved request ${changedKon} but not mentioned where to redirect`);
            break;
    }
    return false;
}