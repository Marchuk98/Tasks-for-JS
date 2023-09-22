var Person = function(){
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {
            f.forEach(friend => this._friends.push(friend));
        }
    }
    return person;
}