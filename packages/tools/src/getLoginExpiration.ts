const ACCOUNTS_DEFAULT_LOGIN_EXPIRATION = 90;

// Given a value, validates if it mets the conditions to be a valid login expiration.
// Else, returns the default login expiration (which for Meteor is 90 days)
export const getLoginExpiration = (expiry?: number) => {
	if (expiry && typeof expiry === 'number' && !Number.isNaN(expiry) && expiry > 0) {
		return expiry;
	}
	return ACCOUNTS_DEFAULT_LOGIN_EXPIRATION;
};
