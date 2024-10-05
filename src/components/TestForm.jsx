import React from 'react'

export default function TestForm() {
  return (
    <div>
        <div className=" mt-56 flex flex-col md:flex-row gap-8 p-4 bg-black">
                  
                  <div className="bg-[var(--card)] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg shadow-white w-full md:w-1/2">
                  
                    <h2 className="text-center text-[var(--accent)] mb-4 font-semibold" style={{ fontFamily: 'Inconsolata, sans-serif', justifyContent: "center" }}>SEND US A MESSAGE</h2>
                    <div className="flex justify-center mb-4">
                      <img src="https://placehold.co/100x50?text=Free+Trial" alt="Free Trial" />
                    </div>
                    <h1 className="text-center text-2xl font-bold mb-6">Formulaire du test Abonnement iptv gratuit</h1>
                    <form className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1/2">
                          <label htmlFor="name" className="block mb-1">Nom: *</label>
                          <input type="text" id="name" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Nom" required />
                        </div>
                        <div className="w-1/2">
                          <label htmlFor="country" className="block mb-1">Pays: *</label>
                          <input type="text" id="country" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Pays" required />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1/2">
                          <label htmlFor="device-type" className="block mb-1">type d'appareil: *</label>
                          <select id="device-type" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" required>
                            <option>SMART TV</option>
                          </select>
                        </div>
                        <div className="w-1/2">
                          <label htmlFor="email" className="block mb-1">Email: *</label>
                          <input type="email" id="email" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="example@example.com" required />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-1">Numero de téléphone: *</label>
                        <input type="text" id="phone" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Entrez Votre Numéro" required />
                      </div>
                      <div>
                        <label htmlFor="iptv-application" className="block mb-1">Application IPTV que vous utilisez: *</label>
                        <select id="iptv-application" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" required>
                          <option>IPTV smarter</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="mac-address" className="block mb-1">Adresse MAC de votre appareils [Smart TV / MAG]:</label>
                        <input type="text" id="mac-address" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Entrez votre adresse ici" />
                      </div>
                      <div>
                        <label className="block mb-1">OPTION ADULTE: *</label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input type="radio" name="adult-option" value="oui" className="mr-2" required /> Oui
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="adult-option" value="non" className="mr-2" required /> non
                          </label>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block mb-1">Message</label>
                        <textarea id="message" className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Message"></textarea>
                      </div>
                      <div className="flex justify-center">
                        <button type="submit" className="bg-[var(--accent)] text-[var(--accent-foreground)] py-2 px-4 rounded hover:bg-[var(--accent)]/80">
                          Envoyer ✉️
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  <div className="bg-[var(--card)] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg shadow-white w-full md:w-1/2">
                    <h2 className="text-xl font-bold mb-4">Guide d'installation :</h2>
                    <p className="mb-4">Ceopity propose un essai gratuit de 24 heures iptv gratuit sans obligation ni paiement requis. Vous pouvez tester notre serveur pour voir toutes les chaînes, bouquets et VODs que nous offrons. Il suffit de cliquer sur le lien pour accéder à notre site Web.</p>
                    <h3 className="text-lg font-semibold mb-2">Procédure d'activation:</h3>
                    <ol className="list-decimal list-inside mb-4">
                      <li>Remplissez le formulaire du test <a href="#" className="text-[var(--primary)]">Abonnement IPTV</a> gratuit.</li>
                      <li>Cliquez sur envoyer.</li>
                      <li>Les informations nécessaires (identifiants et lien m3u) de l'activation vous seront envoyés dans le temps de les générer. (Vérifier votre adresse E-mail après l'envoie).</li>
                    </ol>
                    <h3 className="text-lg font-semibold mb-2">Informations utiles:</h3>
                    <p className="mb-4">L'adresse MAG : une série de chiffres et lettres unique (Example : 1b:10:c8:d2:84:e4) qui permet d'identifier votre appareil. Vous pouvez le trouver soit au niveau des réglages de votre téléviseur ou de votre application.</p>
                    <h3 className="text-lg font-semibold mb-2">N.B:</h3>
                    <ul className="list-disc list-inside mb-4">
                      <li>Les comptes de démonstration seront automatiquement suspendus lors d'événements sportifs majeurs (football, basket, tennis..).</li>
                      <li>Toute demande envoyée alors que les tests sont suspendus sera retardée jusqu'à la fin des événements.</li>
                      <li>Les formulaires mal remplis ou manquant d'informations ne seront pas traités</li>
                    </ul>
                    <h3 className="text-lg font-semibold mb-2">Informations De Contact:</h3>
                    <p className="mb-4">N'hésitez pas à nous <a href="#" className="text-[var(--primary)]">contacter</a> pour tout renseignements.</p>
                    <p>Nos équipes sont à votre disposition 7/7 jours et 24/24 heures.</p>
                  </div>
                </div>
    </div>
  )
}
