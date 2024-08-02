const db = require('../config/connection');
<<<<<<< HEAD
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
=======
const { User, Thought } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');
>>>>>>> origin/main
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
<<<<<<< HEAD
    await cleanDB('Profile', 'profiles');
    
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
=======
    await cleanDB('Thought', 'thoughts');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
>>>>>>> origin/main
});
