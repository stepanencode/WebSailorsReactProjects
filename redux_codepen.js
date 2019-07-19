//People dropping off the form (Action Creators)
//Action Creators return an Action
const createPolicy = (name, amount) => {
	return { // Action( a form in our analogy)
		type: 'CREATE_POLICY',
		payload: {
			name: name, //name: 'Sam'
			amount: amount // amount: 20
		}
	};
};

const deletePolicy = (name) => {
	return { // Action( a form in our analogy)
		type: 'DELETE_POLICY',
		payload: {
			name: name
		}
	};
};

const createClaim = (name, amountOfMoneyToCollect) => {
	return { // Action( a form in our analogy)
		type: 'CREATE_CLAIM',
		payload: {
			name: name, 
			amountOfMoneyToCollect: amount 
		}
	};
};

//Reducers (Departments!)

const claimsHistory = (oldListOfClaims = [], action) => {
	if(action.type === 'CREATE_CLAIM') {
		//we care about this action (FORM!)
		return [...oldListOfClaims, action.payload];
	}
	//we don't care about the action (form!!)
	return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
	if(action.type === 'CREATE_CLAIM') {
		return bagOfMoney - action.payload.amountOfMoneyToCollect;
	} else if (action.type === 'CREATE_POLICY') {
		return bagOfMoney + action.payload.amount;
	}

	return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
	if (action.type === 'CREATE_POLICY') {
		return [...listOfPolicies, action.payload.name];
	} else if ( action.type === 'DELETE_POLICY') {
		return listOfPolicies.filter(name => name !== action.payload.name);
	} 
	return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
	accounting: accounting,
	claimsHistory: claimsHistory,
	policies: policies
});

const store = createStore(ourDepartments);

//dispatch is like form reciever

const action = createPolicy('Sam', 20);

store.dispatch(action);
console.log(store.getState());