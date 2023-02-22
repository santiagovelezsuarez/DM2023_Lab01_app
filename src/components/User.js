import React from 'react';
import {Pressable, View} from 'react-native'

export const User = ({
    user_item,
    setModalVisible,
    setUser,
    userEdit,
    userDelete,
    setModalUser
}) => {
    const {userName, password, birthDate, gender, userEmail, city, codeZip } = user_item;
    return(
        <Pressable
            onLongPress={() => {
                setModalUser(true);
                setUser(user_item);
            }}>        
            <View style={styles.content}>
                <Text syles={styles.label}>Usuario:</Text>
                <Text syles={styles.label}>{userName}</Text>
                <Text syles={styles.label}>{userEmail}</Text>
                <Text syles={styles.label}>{birthDate}</Text>
                <Text syles={styles.label}>{gender}</Text>  
                <Text syles={styles.label}>{city}</Text>  
                <Text syles={styles.label}>{codeZip}</Text>  
                <View>
                    {/* Botón para editar Usuario */}
                    <Pressable
                        style={[styles.btn, styles.btnEdit]}
                        onLongPress={() => {
                            setModalVisible(true);
                            userEdit(id);
                        }}>
                        <Text style={styles.btnText}>Editar</Text>
                    </Pressable>
                    {/* Botón para elminar Usuario */}
                    <Pressable
                        style={[styles.btn, styles.btnDelete]}
                        onLongPress={() => userDelete(id) }>
                        <Text style={styles.btnText}>Eliminar</Text>
                    </Pressable>
                </View> 
            </View>      
        </Pressable>
    );
};