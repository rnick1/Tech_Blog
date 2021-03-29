const { Post } = require('../models');
const posts = [
    {
        post_name: 'Sequal is Fun',
        post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1
    },
    {
        post_name: 'Using Insomnia',
        post_body: 'Bacon ipsum dolor amet pancetta pig pork belly meatball pork loin tongue chuck brisket, tail ground round frankfurter. Shank meatball turducken landjaeger burgdoggen prosciutto pork belly short ribs flank short loin picanha biltong pastrami hamburger pork. Leberkas tri-tip pancetta tenderloin alcatra doner biltong drumstick t-bone shank sausage bacon tail. Flank hamburger bresaola, meatloaf sirloin pork pig alcatra rump short ribs shoulder picanha sausage beef buffalo.',
        user_id: 2
    },
    {
        post_name: 'Developing your coding skills outside the classroom',
        post_body: 'Red leicester fondue rubber cheese. Red leicester jarlsberg cheese triangles babybel cheesecake airedale cut the cheese cream cheese. Fromage frais fromage frais emmental emmental cauliflower cheese parmesan pepper jack taleggio. Who moved my cheese goat airedale stinking bishop airedale emmental bavarian bergkase danish fontina. Cheesy grin.',
        user_id: 3
    }
    ]
    
    const seedPost = () => Post.bulkCreate(posts);

    module.exports = seedPost;
    