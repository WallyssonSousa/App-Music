import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import logo from '../../assets/logo.png'; 
import cd from '../../assets/joaoGomes.png';
import funk from '../../assets/pegaMeuGaroto.png';
import tribo from '../../assets/tribo.png';

export default function Principal(){
    return<>

        <View style={styles.topo}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.boasVindas}>Olá, Vitoria</Text>
        </View> 
        <View style={styles.principal}>
            
            <TouchableOpacity style={styles.cartao}>
               <Image source={cd} style={styles.cd}/> 
               <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>Joao Gomes: Album Digo ou Digo</Text>
                </View>
               </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartao}>
               <Image source={funk} style={styles.cd}/> 
               <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>MC Rd, DJ bill: Pega no meu garoto</Text>
                </View>
               </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cartao}>
               <Image source={tribo} style={styles.cd}/> 
               <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>Tribo da Periferia: Viver sem segredo</Text>
                </View>
               </View>
            </TouchableOpacity>

        </View>          
</>
  
}

const styles = StyleSheet.create({
    topo:{
        backgroundColor: '#121212',
        padding: 30,
    }, 
    logo:{
        width: 70,
        height: 70,
    }, 
    boasVindas:{
        marginTop: 20, 
        fontSize: 26, 
        lineHeight: 42, 
        fontWeight: 700,
        color: '#248cdc'
    }, 
    cartao: { 
        backgroundColor: '#121212',
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 6, 
        flexDirection: "row",
        alignItems: "center", 
        borderColor: '#121212', 
        borderWidth: 4,
        marginTop: 20,

                // Android
                elevation: 4,

                // IOS 
                shadowColor: '#000', 
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 1.30,
                shadowRadius: 3.62,
        
    },
    principal:{
        alignItems: "center", 
        justifyContent: "center", 
    }, 
    cd:{
        width: 48, 
        height: 48, 
        borderRadius: 6, 
        marginVertical: 16, 
        marginLeft: 11,
        borderColor: '#248cdc', 
        borderWidth: 1,
    }, 
    informacoes:{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft: 8, 
        marginVertical: 16,
        marginLeft: 16, 
        marginRight: 17,
        
    }, 
    nome:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "700",
        color: '#248cdc'
    }
})