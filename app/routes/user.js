import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      id: 2,
      name: 'Bender',
      email: null,
      gravatar: 'http://0.gravatar.com/avatar/ef12a3dd48b0e30179f7188bad618558',
      bio: 'My name is Bender, I like to bend!',

      teams: [
        {
          id: 1,
          name: 'Team Napalm',
          location: 'Philadelphia, PA',
          organization: 'Napalm High School',
          logo: 'http://vignette3.wikia.nocookie.net/vghs/images/1/1e/Napalm_Energy_Drink_High_School.jpeg/revision/latest?cb=20141105033542',
          leagues: ['Drones', 'Battlebots', 'Hebocon']
        },

        {
          id: 1,
          name: 'VGHS',
          location: 'New York, NY',
          organization: 'Video Game High School',
          logo: 'http://cdn.shopify.com/s/files/1/0204/9246/products/VGHS_decal_25e752a6-472e-4653-8807-e88fc06f340b_grande.jpg?v=1376026166',
          leagues: ['Gun Game', 'Deathmatch', 'Hebocon']
        }
      ]
    }
  }
});
