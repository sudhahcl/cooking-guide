
describe("appendData is just a function", function() {
   
        var imageDescription = "Cook";
        var checkonchineese;
    var backendDataResult=null;
    beforeEach(function() {
        backendDataResult = {
            "category": [
                {
                  "name":"Chineese",
                  "id":1,
                  "itemList":[ {
                     "itemID":1,
                      "item":"Noodle",
                      "itemImage":"",
                      "description":"Firstly, in a large vessel take 6 cup water, 1 tsp salt and 1 tsp oil.once the water comes to a boil place a pack of hakka noodles (125 gm)boil the noodles for 3 minutes or till it turns al dente. refer package instructions to know the exact cooking timedrain off the water from noodles and pour 1 cup of cold water to prevent from further cooking.drizzle 1 tsp oil and mix gently, to avoid noodles from sticking to each other. keep aside.now in a large kadai heat 2 tbsp oil and saute 2 clove garlic",
                      "count":1
                  },
                  {
                      "itemID":2,
                    "item":"Schezwan Rice",
                    "itemImage":"",
                    "description":"Boil the rice in water and when  water comes to a boil place a pack of thai masala (125 gm)boil the noodles for 3 minutes or till it turns al dente. refer package instructions to know the exact cooking timedrain off the water from noodles and pour 1 cup of cold water to prevent from further cooking.drizzle 1 tsp oil and mix gently, to avoid noodles from sticking to each other. keep aside.now in a large kadai heat 2 tbsp oil and saute 2 clove garlic",
                    "count":1
                }]}
                ]
             
        };
  });
  it("appenData method", function() {
  expect(backendDataResult.category.length).toEqual(1);
});
it('To get Noodles Description', () => {
  // let result = backendDataResult.emeployees.filter(val=>val.id)
    // spyOn(backendDataResult, 'onDelte');
    expect(imageDescription).toEqual('cook');
 });

});
