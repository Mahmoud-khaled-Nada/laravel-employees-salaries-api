import { useEffect, useState } from "react";
import { _api } from "../../utils/api";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            setLoading(true);
            const data = await _api.get("/user");
            setUsers(data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                "Loading..."
            ) : (
                <>
                    username is:
                    <span style={{ color: "red" }}>{users?.name}</span>
                </>
            )}
        </div>
    );
}
